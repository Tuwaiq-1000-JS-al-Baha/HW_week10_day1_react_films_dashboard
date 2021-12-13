import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function CastEditModal(props) {
  const { show, setShow, cast } = props
  const { editCast } = useContext(FilmsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editCast(e, cast._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Cast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              firstName
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="firstName" defaultValue={cast.firstName} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              lastName
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={cast.lastName} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Poster
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" defaultValue={cast.photo} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              type
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="type" defaultValue={cast.type} required />
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

export default CastEditModal
