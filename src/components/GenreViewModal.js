import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function GenreViewModal(props) {
  const { show, setShow, genre } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Genre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
          <ListGroup.Item>
            <strong>Name:</strong> {genre.name}
          </ListGroup.Item>
        
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
