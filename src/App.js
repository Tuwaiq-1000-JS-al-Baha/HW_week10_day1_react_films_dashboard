import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Films from "./pages/Films"
import Genres from "./pages/Genres"
import FilmsContext from "./utils/FilmsContext"
import SignUp from "./pages/Signup"
import Login from "./pages/Login"
import Casts from "./pages/Casts"

function App() {
  const [films, setFilms] = useState([])
  const [genres, setGenres] = useState([])
  const [casts, setCast] = useState([])

  const navigate = useNavigate()

  const getFilms = async () => {
    const response = await axios.get("http://localhost:5000/api/films")
    setFilms(response.data)
  }
  const getGenres = async () => {
    const response = await axios.get("http://localhost:5000/api/genres")
    setGenres(response.data)
  }
  const getCast = async () => {
    const response = await axios.get("http://localhost:5000/api/casts")
    setCast(response.data)
  }

  useEffect(() => {
    getFilms()
    getGenres()
    getCast()
  }, [])

  const deleteFilm = async filmId => {
    try {
      await axios.delete(`http://localhost:5000/api/films/${filmId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("film deleted")
      getFilms()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteGenre = async genreId => {
    try {
      await axios.delete(`http://localhost:5000/api/genres/${genreId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("genre deleted")
      getGenres()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deletecast = async castId => {
    try {
      await axios.delete(`http://localhost:5000/api/casts/${castId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("cast deleted")
      getCast()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userbody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post("http://localhost:5000/api/auth/add-admin", userbody)
      navigate("/login")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userbody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login", userbody)
      const tokenDashboardFilms = response.data
      localStorage.tokenDashboardFilms = tokenDashboardFilms
      navigate("/film")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    films,
    deleteFilm,
    genres,
    deleteGenre,
    signup,
    login,
    casts,
    deletecast,
  }

  return (
    <FilmsContext.Provider value={store}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/films" element={<Films />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/casts" element={<Casts />} />
          </Routes>
        </Box>
      </Box>
    </FilmsContext.Provider>
  )
}

export default App
