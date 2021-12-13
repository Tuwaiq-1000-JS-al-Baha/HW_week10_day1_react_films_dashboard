import { useContext, useState } from "react"
import { Table, Button } from "react-bootstrap"
import GenreDeleteModal from "../components/GenreDeleteModal"
import GenreViewModal from "../components/GenreViewModal"
import FilmsContext from "../utils/FilmsContext"

function Genres() {
  const { genres } = useContext(FilmsContext)
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>#</th>
            <th>Name</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {genres.map(genre => (
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
              <GenreViewModal show={viewShow} setShow={setViewShow} genre={genre} />
              <GenreDeleteModal show={deleteShow} setShow={setDeleteShow} id={genre._id} />
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Genres
