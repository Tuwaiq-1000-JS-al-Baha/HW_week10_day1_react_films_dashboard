import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { toast } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Casts from "./pages/Casts"
import Films from "./pages/Films"
import Genres from "./pages/Genres"
import Users from "./pages/Users"
import FilmsContext from "./utils/FilmsContext"

function App() {
  const [films, setFilms] = useState([])
  const [genres, setGenres] = useState([])
  const [casts, setCasts] = useState([])
  const [users, setUsers] = useState([])
  const getFilms = async () => {
    const response = await axios.get("http://localhost:5000/api/films")
    setFilms(response.data)
  }
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
//------------------------------genres-------------------------------------------//

const getGenres = async () => {
  const response = await axios.get("http://localhost:5000/api/genres")
  setGenres(response.data)
}

const deleteGenre=async genreId=>{
  try {
    await axios.delete(`http://localhost:5000/api/genres/${genreId}`, {
      headers: {
        Authorization: localStorage.tokenDashboardFilms,
      },
    })
    toast.success("Genrs deleted")
    getGenres()
  } catch (error) {
    if (error.response) toast.error(error.response.data)
    else console.log(error)
  }
}

//______casts______________//

const getCasts = async () => {
  const response = await axios.get("http://localhost:5000/api/casts")
  setCasts(response.data)
}

const deleteCasts=async castId=>{
  try {
    await axios.delete(`http://localhost:5000/api/casts/${castId}`, {
      headers: {
        Authorization: localStorage.tokenDashboardFilms,
      },
    })
    toast.success("Cast deleted")
    getCasts()
  } catch (error) {
    if (error.response) toast.error(error.response.data)
    else console.log(error)
  }
}
//______users______________//

const getUsers = async () => {
  const response = await axios.get("http://localhost:5000/api/auth/users")
  setUsers(response.data)
}

const deleteUsers=async userId=>{
  try {
    await axios.delete(`http://localhost:5000/api/user/${userId}`, {
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
  useEffect(() => {
    getFilms()
    getGenres()
    getCasts()
    getUsers()
  }, [])
  const store = {
    films,
    deleteFilm,
    genres,
    deleteGenre,
    casts,
    deleteCasts,
    getUsers,
    deleteUsers,
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
            <Route path="/genres" element={<Genres />} />
            <Route path="/casts" element={<Casts />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Box>
      </Box>
    </FilmsContext.Provider>
  )
}

export default App
