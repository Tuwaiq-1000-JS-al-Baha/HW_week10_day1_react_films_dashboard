import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Films from "./pages/Films"
import Genres from "./pages/Genres"
import FilmsContext from "./utils/FilmsContext"
import Login from "./pages/Login"
import Casts from "./pages/Casts"
import User from "./pages/User"

function App() {
  const [films, setFilms] = useState([])
  const [genres, setGenres] = useState([])
  const [casts, setCast] = useState([])
  const [actors, setActors] = useState([])
  const [directors, setDirectors] = useState([])
  const [users, setUsers] = useState([])

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
  const getActors = async () => {
    const response = await axios.get("http://localhost:5000/api/casts/actors")
    setActors(response.data)
  }

  const getDirectors = async () => {
    const response = await axios.get("http://localhost:5000/api/casts/dierctor")
    setDirectors(response.data)
  }
  const getuser = async () => {
    try{
      const response = await axios.get("http://localhost:5000/api/auth/user", {
          headers: {
            Authorization: localStorage.tokenDashboardFilms,
          },
        })
        setUsers(response.data)
    }catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }}

  useEffect(() => {
    getFilms()
    getGenres()
    getCast()
    getActors()
    getDirectors()
    getuser()
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
      toast.success("login success")
      navigate("/films")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editFilm = async (e, filmId) => {
    e.preventDefault()
    try {
      const form = e.target

      const genres = []
      form.elements.genres.forEach(genre => {
        if (genre.checked) {
          genres.push(genre.value)
        }
      })

      const actors = []
      form.elements.actors.forEach(actor => {
        if (actor.checked) {
          actors.push(actor.value)
        }
      })

      const filmBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        genres: genres,
        actors: actors,
        director: form.elements.director.value,
      }
      await axios.put(`http://localhost:5000/api/films/${filmId}`, filmBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getFilms()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addFilm = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const genres = []
      form.elements.genres.forEach(genre => {
        if (genre.checked) {
          genres.push(genre.value)
        }
      })

      const actors = []
      form.elements.actors.forEach(actor => {
        if (actor.checked) {
          actors.push(actor.value)
        }
      })

      const filmBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        poster: form.elements.poster.value,
        genres: genres,
        actors: actors,
        director: form.elements.director.value,
      }
      await axios.post(`http://localhost:5000/api/films`, filmBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getFilms()
      toast.success("add film success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addGenrs = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const genresBody = {
        name: form.elements.name.value,
      }
      await axios.post(`http://localhost:5000/api/genres`, genresBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getGenres()
      toast.success("add genre success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editGenre = async (e, genrId) => {
    e.preventDefault()
    try {
      const form = e.target
      const genreBody = {
        name: form.elements.name.value,
      }
      await axios.put(`http://localhost:5000/api/genres/${genrId}`, genreBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getGenres()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editCast = async (e, castId) => {
    e.preventDefault()
    try {
      const form = e.target
      const castBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
        type: form.elements.type.value,
      }
      await axios.put(`http://localhost:5000/api/casts/${castId}`, castBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getCast()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addCast = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const castBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        photo: form.elements.photo.value,
        type: form.elements.type.value,
      }
      await axios.post(`http://localhost:5000/api/casts`, castBody, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      getCast()
      toast.success("add cast success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deletusers = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardFilms,
        },
      })
      toast.success("user deleted")
      getuser()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    films,
    deleteFilm,
    addCast,
    genres,
    actors,
    directors,
    deleteGenre,
    login,
    casts,
    deletecast,
    editFilm,
    addFilm,
    addGenrs,
    editGenre,
    editCast,
    users,
    deletusers,
  }

return (
    <>
      <FilmsContext.Provider value={store}>
        <ToastContainer />
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <Sidebar />

          <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
            <Routes>
              <Route path="/films" element={<Films />} />
              <Route path="/genres" element={<Genres />} />
              <Route path="/login" element={<Login />} />
              <Route path="/casts" element={<Casts />} />
              <Route path="/users" element={<User />} />
            </Routes>
          </Box>
        </Box>
      </FilmsContext.Provider>
    </>
  )
}

export default App
