import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function CastViewModal(props) {
  const { show, setShow, cast } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Cast</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>fristName</strong> {cast.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>lastName</strong> {cast.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>photo</strong>{" "}
            <img src={cast.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Type</strong> {cast.type}
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

export default CastViewModal
