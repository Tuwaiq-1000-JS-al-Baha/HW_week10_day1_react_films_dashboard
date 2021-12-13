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
  const [casts , setCasts] = useState([])
  const [actors , setActors] = useState([])
  const [directors, setDirectors] = useState([])
  const [genres , setGenres] = useState([])



  const getFilms = async () => {
    const response = await axios.get("http://localhost:5000/api/films")
    setFilms(response.data)
  }

  useEffect(() => {
    getFilms()
    getCast()
    getGenres()
    
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
  const getCast = async () => {
    const response = await axios.get("http://localhost:5000/api/casts") 
    setCasts(response.data)
    setActors(response.data.filter(cast => cast.type === "Actor"))
    setDirectors(response.data.filter(cast => cast.type === "Director"))
  }
  const deleteCast = async (castId) => {
    try {
      await axios.delete(`http://localhost:5000/api/casts/${castId}` , {
        headers : {
          Authorization : localStorage.tokenDashboardFilms
        }
      })
      getCast()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const getGenres = async () => {
    const response = await axios.get("http://localhost:5000/api/genres")
    setGenres(response.data)

  }
  const deleteGenre = async (genreId) => {
    try {
      await axios.delete(`http://localhost:5000/api/genres/${genreId}` , {
        headers : {
          Authorization : localStorage.tokenDashboardFilms
        }
      })
      getGenres()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    films,
    deleteFilm,
    casts ,
    actors ,
    directors ,
    deleteCast ,
    genres ,
    deleteGenre ,
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
