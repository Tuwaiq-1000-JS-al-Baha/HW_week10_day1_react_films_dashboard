import { useState } from "react"
import { Button } from "react-bootstrap"
import GenreDelete from "./GenreDelete"
import GenreView from "./GenreView"


function GenresCell(props) {
  const { genre } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{genre._id}</td>
      <td>{genre.name}</td>
      
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2">
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <GenreView show={viewShow} setShow={setViewShow} genre={genre} />
      <GenreDelete show={deleteShow} setShow={setDeleteShow} genreId={genre._id} />
    </tr>
  )
}

export default GenresCell
