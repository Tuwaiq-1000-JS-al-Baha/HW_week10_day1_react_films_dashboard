import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function GenreAddModal(props) {
  const { show, setShow } = props
  const { addGenrs } = useContext(FilmsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addGenrs}>
        <Modal.Header closeButton>
          <Modal.Title>Add Genres</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add genre
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default GenreAddModal
