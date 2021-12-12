import { ListItemText } from "@mui/material"

import { useContext } from "react"
import { Button, ListGroup, Modal } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function GenreViewModal(props) {
  const { show, setShow } = props
  const { genres } = useContext(FilmsContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View genre</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Genres:</strong>
            <ListGroup>
              {genres.map(genre => (
                <ListItemText>{genre.name}</ListItemText>
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

export default GenreViewModal
