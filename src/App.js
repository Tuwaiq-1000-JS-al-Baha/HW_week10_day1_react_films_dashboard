import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { toast } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Films from "./pages/Films"
import Casts from "./pages/Casts"
import FilmsContext from "./utils/FilmsContext"
import Genres from "./pages/Genres"
import Users from "./pages/Users"

function App() {
  const [films, setFilms] = useState([])
  const [casts, setcasts] = useState([])
  const [genres, setGenres] = useState([])
  const [users, setUsers] = useState([])

  // get films
  const getFilms = async () => {
    const response = await axios.get("http://localhost:5000/api/films")
    setFilms(response.data)
  }

  // get users
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users")
    setUsers(response.data)
  }

  // get casts
  const getCasts = async () => {
    const response = await axios.get("http://localhost:5000/api/casts")
    setcasts(response.data)
    getFilms()
  }

  // get genres
  const getGenres = async () => {
    const response = await axios.get("http://localhost:5000/api/genrs")
    setGenres(response.data)
  }

  useEffect(() => {
    getFilms()
    getUsers()
    getCasts()
    getGenres()
  }, [])

  // delete film
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

  // delete user
  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  // delete cast
  const deleteCast = async castId => {
    try {
      await axios.delete(`http://localhost:5000/api/casts/${castId}`, {
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

  // delete genres
  const deleteGenre = async genreId => {
    try {
      await axios.delete(`http://localhost:5000/api/genrs/${genreId}`, {
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

  const store = {
    films,
    casts,
    genres,
    users,
    deleteFilm,
    deleteUser,
    deleteGenre,
    deleteCast,
  }

  return (
    <FilmsContext.Provider value={store}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/films" element={<Films />} />
            <Route path="/casts" element={<Casts />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Box>
      </Box>
    </FilmsContext.Provider>
  )
}

export default App
