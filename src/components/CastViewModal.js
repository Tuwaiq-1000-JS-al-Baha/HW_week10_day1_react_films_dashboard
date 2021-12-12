import { Button, ListGroup, Modal } from "react-bootstrap"

function CastViewModel(props) {
    const {show , setShow , cast} = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Cast</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>First Name:</strong> {cast.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>First Name:</strong> {cast.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Type:</strong> {cast.type}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Poster:</strong>{" "}
            <img src={cast.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
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

export default CastViewModel