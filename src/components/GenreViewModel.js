import { useContext } from "react";
import { Button,  ListGroup, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext";

function FilmViewModal(props) {
  const { show, setShow,film} = props
  const { genres } = useContext(FilmsContext);
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
            <strong>Name:</strong> {genres.name}
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
