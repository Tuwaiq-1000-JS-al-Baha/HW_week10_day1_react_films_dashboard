import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function CastDeleteModal(props) {
  const { deleteCasts } = useContext(FilmsContext)
  const { show, setShow, castId } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete casts</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this cast ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteCasts(castId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default CastDeleteModal