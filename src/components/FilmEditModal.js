import { useContext } from "react"
import { Button, Col, Form, Image,  Modal, Row } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function FilmEditModal(props) {
  const { show, setShow, film } = props
  const { genres, editFilm, actors, directors } = useContext(FilmsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editFilm(e, film._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={film.title} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={film.description} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="poster" defaultValue={film.poster} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Genres
            </Form.Label>
            <Col md="8">
              {genres.map(genreObject => (
                <Row>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="genres"
                      defaultChecked={film.genres.find(genreFilm => genreFilm._id === genreObject._id)}
                      value={genreObject._id}
                    />
                  </Col>
                  <Col md="2">
                    <span>{genreObject.name}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Actors
            </Form.Label>
            <Col md="8">
              {actors.map(actor => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="actors"
                      defaultChecked={film.actors.find(actorFilm => actorFilm._id === actor._id)}
                      value={actor._id}
                    />
                  </Col>
                  <Col md="10">
                    <Image src={actor.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                    <span style={{ marginLeft: 10 }}>
                      {actor.firstName} {actor.lastName}
                    </span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Director
            </Form.Label>
            <Col md="8">
              {directors.map(director => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check
                      type="radio"
                      name="director"
                      defaultChecked={film.director._id === director._id}
                      value={director._id}
                    />
                  </Col>
                  <Col md="10">
                    <Image src={director.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                    <span style={{ marginLeft: 10 }}>
                      {director.firstName} {director.lastName}
                    </span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default FilmEditModal
