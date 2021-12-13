import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function GenreEditModal(props) {
  const { show, setShow, genre } = props
  const { editGenre } = useContext(FilmsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editGenre(e, genre._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit genres</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="name" defaultValue={genre.name} required />
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

export default GenreEditModal
