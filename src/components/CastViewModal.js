import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function FilmViewModal(props) {

  const { show, setShow, cast  } = props
  
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Film</Modal.Title>
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
            <strong>Type:</strong> {cast.type}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Films:</strong>
            <ListGroup>
              {cast.films.map(film => (
                <ListGroup.Item>
                  <img src={cast.photo} width="100%" style={{ maxHeight: 200 }} />
                  <span style={{ marginLeft: 10 }}>
                    {film.title}
                  </span>
                </ListGroup.Item>
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
export default FilmViewModal