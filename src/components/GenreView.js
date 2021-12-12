import { useContext } from "react"
import { Button,  ListGroup, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function GenreView(props) {
  const { show, setShow } = props
  const {genres}=useContext(FilmsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
          <ListGroup.Item>
            <strong>Genres:</strong>
            <ListGroup>
              {genres.map(genre => (
                <ListGroup.Item>{genre.name}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
         </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default GenreView
