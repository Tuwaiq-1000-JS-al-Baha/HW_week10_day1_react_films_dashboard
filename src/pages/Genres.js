import { useContext, useState } from "react"
import { Modal } from "react-bootstrap"
import { Table, Button } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function Genres() {
  const { genres, deleteGenre } = useContext(FilmsContext)
  const [smShow, setSmShow] = useState(false)
  if (!genres) return <h1>Loading..</h1>
  return (
    <>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>#</th>
            <th style={{ width: "40%" }}>Name</th>
            <th style={{ width: "40%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {genres.map(genre => (
            <tr>
              <td style={{ width: "20%" }}>{genre._id}</td>
              <td style={{ width: "30%" }}>{genre.name}</td>
              <td>
                <Button variant="danger" onClick={() => setSmShow(true)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Are you sure to delete this genre ?</Modal.Title>
          <Button variant="danger" onClick={() => deleteGenre(genre._id)}>
            Delete
          </Button>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal> */}
      )
    </>
  )
}

export default Genres
