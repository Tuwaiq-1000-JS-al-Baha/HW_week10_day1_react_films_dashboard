import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function CastAddModal(props) {
  const { show, setShow } = props
  const { addCast } = useContext(FilmsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addCast}>
        <Modal.Header closeButton>
          <Modal.Title>Add Cast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              firstName :
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="firstName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              lastName :
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              pohoto
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="photo" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              type
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="type" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add cast
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CastAddModal
