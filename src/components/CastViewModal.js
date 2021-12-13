import { Button, ListGroup, Modal } from "react-bootstrap"

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
            <strong>First Name:</strong> {cast.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Last Name:</strong> {cast.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Photo:</strong>{" "}
            <img src={cast.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Films:</strong>
            <ListGroup>
              {cast.films.map(film => (
                <ListGroup.Item>{film.title}</ListGroup.Item>
              ))}
            </ListGroup>
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