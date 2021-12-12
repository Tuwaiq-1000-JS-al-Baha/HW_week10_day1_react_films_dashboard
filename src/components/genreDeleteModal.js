import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function GenreDeleteModal(props) {
  const { deleteGenre } = useContext(FilmsContext)
  const { show, setShow, genreId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Genre</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this genre ?</Modal.Body>
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

export default GenreDeleteModal
