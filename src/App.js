import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { toast } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Casts from "./pages/Casts"
import Films from "./pages/Films"
import Genres from"./pages/Genres"
import Users from"./pages/Users"
import FilmsContext from "./utils/FilmsContext"

function App() {
  const [films, setFilms] = useState([])
  const [casts,setcasts] = useState([])
  const [genras,setGenras] = useState([])
  const [users , setUsers] = useState([])



  const getFilms = async () => {
    const response = await axios.get("http://localhost:5000/api/films")
    setFilms(response.data)
  }

  useEffect(() => {
    getFilms()
  }, [])

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users")
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

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

const getCasts = async()=>{
  const response = await axios.get("http://localhost:5000/api/cast")
  setcasts(response.data)
}
useEffect(()=>{
  getCasts()
},[])


const getGenras = async()=>{
  const response = await axios.get("http://localhost:5000/api/genras")
  setGenras(response.data)
}
useEffect(()=>{
  getGenras()
},[])





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
  const deleteCast= async castId => {
    try {
      await axios.delete(`http://localhost:5000/api/cast/${castId}`, {
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

  const deleteGenra= async genraId => {
    try {
      await axios.delete(`http://localhost:5000/api/genras/${genraId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("genra deleted")
      getGenras()
      
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    films,
    deleteFilm,
    casts,
    deleteCast,
    deleteGenra,
    deleteUser,
    genras,
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
            <Route path="/casts" element={<Casts/>} />
            <Route path="/genres" element={<Genres/>} />
            <Route path="/users" element={<Users/>}/>
          </Routes>
        </Box>
      </Box>
    </FilmsContext.Provider>
  )
}

export default App
