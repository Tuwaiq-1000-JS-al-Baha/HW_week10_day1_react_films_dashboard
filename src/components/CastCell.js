import { useState } from "react"
import { Button } from "react-bootstrap"
import CastDeleteModal from "./CastDeleteModal"
import CastViewModal from "./CastViewModal"

function CastCell(props) {
  const { cast } = props

  const [viewShowCast, setViewShowCast] = useState(false)
  const [deleteCastShow, setDeleteCastShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{cast._id}</td>
      <td>{cast.firstName}</td>
      <td>{cast.lastName}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{cast.Films}</td>
      <td>
        <img src={cast.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShowCast(true)}>
          View
        </Button>
        <Button variant="success" className="me-2">
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteCastShow(true)}>
          Delete
        </Button>
      </td>
      <CastViewModal show={viewShowCast} setShow={setViewShowCast} cast={cast} />
      <CastDeleteModal show={deleteCastShow} setShow={setDeleteCastShow} castId={cast._id} />
    </tr>
  )
}

export default CastCell
