import { useState } from "react"
import { Button } from "react-bootstrap"
import GenreDeleteModal from "./GenreDeleteModal"
import GenreViewModal from "./GenreViewModal"

function GenreCell(props) {
  const { genre } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{genre._id}</td>
      <td>{film.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{genre.name}</td>
      
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <FilmViewModal show={viewShow} setShow={setViewShow} genre={genre} />
      <FilmDeleteModal show={deleteShow} setShow={setDeleteShow} genreId={genre._id} />
    </tr>
  )
}

export default GenreCell
