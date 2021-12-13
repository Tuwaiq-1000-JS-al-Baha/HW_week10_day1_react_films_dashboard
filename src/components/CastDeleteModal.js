import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function CastDeleteModal(props) {
  const { deleteCast } = useContext(FilmsContext)
  const { deleteCastShow, setDeleteCastShow, castId } = props
  return (
    <>
      <Modal deleteCastShow={deleteCastShow} onHide={() => setDeleteCastShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Cast</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Cast ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteCastShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => deleteCast(castId)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CastDeleteModal
