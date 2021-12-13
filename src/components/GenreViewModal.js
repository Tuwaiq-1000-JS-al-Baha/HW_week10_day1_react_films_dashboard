import { ListGroup, Modal, Button } from "react-bootstrap"

function GenreViewModal(props) {
  const { show, setShow, genre } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Cast</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Id:</strong> {genre._id}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Name:</strong> {genre.name}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GenreViewModal
