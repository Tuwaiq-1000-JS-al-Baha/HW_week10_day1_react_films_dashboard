import { useState } from "react"
import { Button } from "react-bootstrap"
import CastDeleteModal from "./CastDeleteModal"
import CastViewModal from "./CastViewModal"

function CastCell(props) {
  const { cast } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{cast._id}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{cast.firstName}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{cast.lastName}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{cast.type}</td>
      <td>
        <img src={cast.Photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} alt="" />
      </td>
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
      <CastViewModal show={viewShow} setShow={setViewShow} cast={cast} />
      <CastDeleteModal show={deleteShow} setShow={setDeleteShow} castId={cast._id} />
    </tr>
  )
}

export default CastCell