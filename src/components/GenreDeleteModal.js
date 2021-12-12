import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function GenreDeleteModal(props) {
  const { deleteGenre } = useContext(FilmsContext)
  const { show, setShow, genreId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Genre</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this genrs ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
        Confirm
        </Button>
        <Button variant="danger" onClick={() => deleteGenre(genreId)}>
          
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GenreDeleteModal