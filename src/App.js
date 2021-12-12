import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { toast } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Films from "./pages/Films"
import Casts from "./pages/Casts"
import Genres from "./pages/Genres"
import FilmsContext from "./utils/FilmsContext"

function App() {
  const [films, setFilms] = useState([])
  const [casts, setCasts] = useState([])
  const [genres,setGenres] = useState([])


  useEffect(() => {
    getFilms()
    getGenres()
    getCast()
  }, [])
  const getFilms = async () => {
    const response = await axios.get("http://localhost:5000/api/films")
    setFilms(response.data)
  }
  /////Get Cast
  const getCast = async () => {
    const response = await axios.get("http://localhost:5000/api/cast")
    setCasts(response.data)
  }
  ////////////delet Cast
  const deleteCast = async castId => {
    try {
      await axios.delete(`http://localhost:5000/api/cast/${castId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      console.log(castId)
      toast.success("cast deleted")
      getGenres()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
//////////get geners
  const getGenres = async () => {
    const response = await axios.get("http://localhost:5000/api/genres")
    console.log(response.data)
    setGenres(response.data)
  }
  ////Delete Genres
  const deleteGenre = async genreId => {
    try {
      await axios.delete(`http://localhost:5000/api/genres/${genreId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      console.log(genreId)
      toast.success("genre deleted")
      getGenres()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
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

  const store = {
    films,
    deleteFilm,
    casts,
    deleteCast,
    genres,
    deleteGenre,
   
 
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
        
          </Routes>
        </Box>
      </Box>
    </FilmsContext.Provider>
  )
}

export default App
