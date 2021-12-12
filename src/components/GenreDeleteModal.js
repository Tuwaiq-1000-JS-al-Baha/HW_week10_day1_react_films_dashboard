import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function GenreDeleteModal(props) {
  const { deleteShow, setDeleteShow, genreId } = props
  const { deleteGenre } = useContext(FilmsContext)
  return (
    <Modal show={deleteShow} onHide={() => setDeleteShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Genre</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this genre ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setDeleteShow(false)}>
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
