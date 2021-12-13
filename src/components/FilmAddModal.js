import { useContext } from "react"
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function FilmAddModal(props) {
  const { show, setShow } = props
  const { genres, addFilm, actors, directors } = useContext(FilmsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addFilm}>
        <Modal.Header closeButton>
          <Modal.Title>Add Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="poster" required />
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
                    <Form.Check type="checkbox" name="genres" value={genreObject._id} />
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
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {actors.map(actor => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="checkbox" name="actors" value={actor._id} />
                  </Col>
                  <Col md="7">
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
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {directors.map(director => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="radio" name="director" value={director._id} />
                  </Col>
                  <Col md="8">
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
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add film
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default FilmAddModal
