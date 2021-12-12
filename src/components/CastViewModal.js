import { Button, ListGroup, Modal } from "react-bootstrap"

function CastViewModal(props) {
  const { show, setShow, cast } = props
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>View Casts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <strong>First Name:</strong> {cast.firstName} {cast.lastName}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Films:</strong> {cast.films}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Photo:</strong>{" "}
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
    </>
  )
}

export default CastViewModal
