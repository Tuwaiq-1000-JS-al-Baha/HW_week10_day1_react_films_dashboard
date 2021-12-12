import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function CastDeleteModal(props) {
  const { deleteFilm } = useContext(FilmsContext)
  const { show, setShow, castId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Film</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this cast ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteFilm(castId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CastDeleteModal
