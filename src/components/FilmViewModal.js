import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function FilmViewModal(props) {
  const { show, setShow, film } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Film</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {film.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> {film.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Poster:</strong>{" "}
            <img src={film.poster} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Rating:</strong> {film.ratingAverage}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Genres:</strong>
            <ListGroup>
              {film.genres.map(genre => (
                <ListGroup.Item>{genre.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Actors:</strong>
            <ListGroup>
              {film.actors.map(actor => (
                <ListGroup.Item>
                  <Image src={actor.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                  <span style={{ marginLeft: 10 }}>
                    {actor.firstName} {actor.lastName}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Director:</strong>
            <ListGroup>
              <ListGroup.Item>
                <Image src={film.director.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                <span style={{ marginLeft: 10 }}>
                  {film.director.firstName} {film.director.lastName}
                </span>
              </ListGroup.Item>
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
