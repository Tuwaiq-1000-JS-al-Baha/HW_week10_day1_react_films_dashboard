import { useContext } from "react"
import { Modal, Button } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function GenreDeleteModel(props) {
  const { show, setShow, genreId } = props
  const { deleteGenre } = useContext(FilmsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Genre</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Genre ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteGenre(genreId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GenreDeleteModel