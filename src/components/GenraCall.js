import { useState } from "react"
import { Button } from "react-bootstrap"

import GenraViewModel from "./GenraViewModel"
import GenraDeleteModal from"./GenraDeleteModel"
function GenraCall(props) {
  const { genra } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{genra._id}</td>
      <td>{genra.name}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2">
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>
      <GenraViewModel show={viewShow} setShow={setViewShow} genra={genra} />
      <GenraDeleteModal show={deleteShow} setShow={setDeleteShow} genraId={genra._id} />
      
    </tr>
  )
}

export default GenraCall
