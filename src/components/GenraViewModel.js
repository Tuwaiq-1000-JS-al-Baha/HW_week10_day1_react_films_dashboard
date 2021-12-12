import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function GenraViewModel(props) {
    const { show, setShow, genra } = props

    return ( <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>View Film</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ListGroup>
        <ListGroup.Item>
          <strong>type of genra</strong> {genra.name}
        </ListGroup.Item>
      
      
       
        
       
      </ListGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShow(false)}>
        Close
      </Button>
    </Modal.Footer>
  </Modal> );
}

export default GenraViewModel;