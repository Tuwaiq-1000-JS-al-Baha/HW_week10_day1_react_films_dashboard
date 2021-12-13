import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function GenraDeleteModal(props) {
  const { deleteGenra } = useContext(FilmsContext)
  const { show, setShow, genraId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete genra</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this genra ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteGenra(genraId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GenraDeleteModal
