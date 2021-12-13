import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function UserDeleteModal(props) {
  const { deleteUser } = useContext(FilmsContext)
  const { show, setShow, id } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete User</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this User ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteUser(id)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserDeleteModal
