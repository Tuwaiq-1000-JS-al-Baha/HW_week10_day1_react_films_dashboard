import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function GenreDeleteModal(props) {
  const { deleteGenre } = useContext(FilmsContext)
  const { show, setShow, genres } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Genre</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this film ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteGenre(genres)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GenreDeleteModal
