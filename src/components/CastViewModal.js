import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function CastViewModal(props) {
  const { show, setShow, cast } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Film</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>fristName :</strong> {cast.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>lastName:</strong> {cast.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong> Photo:</strong>{" "}
            <Image src={cast.photo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Type:</strong> {cast.type}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup>
          {cast.films.map(film => (
            <>
              <ListGroup.Item>
                <strong>Title:</strong> {film.title}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Description:</strong> {film.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Poster:</strong>{" "}
                <Image src={film.poster} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
              </ListGroup.Item>
            </>
          ))}
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
