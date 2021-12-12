import { Button, Stack } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useContext, useState } from "react"
import FilmViewDialog from "../components/FilmViewDialog"
import FilmsContext from "../utils/FilmsContext"

export default function Films() {
  const { films } = useContext(FilmsContext)
  const [open, setOpen] = useState(false)
  const [oneFilm, setOneFilm] = useState(null)

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "description", headerName: "Description", width: 130 },
    {
      field: "poster",
      headerName: "Poster",
      renderCell: params => <img src={params.value} style={{ objectFit: "contain", height: "100%", width: "100%" }} />,
      width: 120,
    },
    { field: "ratingAverage", headerName: "Rating", width: 50 },
    {
      field: "actions",
      headerName: "Actions",
      width: 280,
      renderCell: params => (
        <>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setOneFilm(params.value)
                setOpen(true)
              }}
            >
              View
            </Button>
          </Stack>
        </>
      ),
    },
  ]
  const filmRows = films.map(film => ({
    id: film._id,
    title: film.title,
    description: film.description,
    poster: film.poster,
    ratingAverage: film.ratingAverage,
    actions: film,
  }))
  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid rows={filmRows} columns={columns} pageSize={6} rowsPerPageOptions={[6]} />
      <FilmViewDialog open={open} setOpen={setOpen} film={oneFilm} />
    </div>
  )
}
