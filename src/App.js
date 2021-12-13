import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import Login from "./pages/Login"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Cast from "./pages/Cast"
import Films from "./pages/Films"
import Genre from "./pages/Genre"
import FilmsContext from "./utils/FilmsContext"
import User from "./pages/User"

function App() {
  const [films, setFilms] = useState([])
  const [genres, setGenres] = useState([])
  const [casts, setCasts] = useState([])
  const [users, setUsers] = useState([])

  const navgate = useNavigate()

  const getFilms = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/films")
      setFilms(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/user")
      setUsers(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getGenres = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/genres")
      setGenres(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const getCasts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/casts")
      setCasts(response.data)
      console.log(response.data)
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  useEffect(() => {
    getFilms()
    getGenres()
    getCasts()
    getUsers()
  }, [])

  const deleteFilm = async filmId => {
    try {
      await axios.delete(`http://localhost:5000/api/films/${filmId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      console.log("film deleted")
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

  const deleteCast = async castId => {
    try {
      await axios.delete(`http://localhost:5000/api/genres/${castId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("cast deleted")
      getCasts()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }

      const response = await axios.post("http://localhost:5000/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardFilms = response.data
      console.log("login is success")
      navgate("/films")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenDashboardFilms")
  }

  const store = {
    films,
    deleteFilm,
    deleteGenre,
    genres,
    casts,
    deleteCast,
    login,
    logout,
    users,
  }

  return (
    <FilmsContext.Provider value={store}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/films" element={<Films />} />
            <Route path="/genres" element={<Genre />} />
            <Route path="/casts" element={<Cast />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<User />} />
          </Routes>
        </Box>
      </Box>
    </FilmsContext.Provider>
  )
}

export default App
