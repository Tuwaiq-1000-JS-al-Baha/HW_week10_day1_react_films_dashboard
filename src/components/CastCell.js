import { useState } from "react"
import { Table, Button } from "react-bootstrap"
import CastDeleteModel from "./CastDeleteModal"
import CastViewModel from "./CastViewModal"


function CastCell(props) {
  const { casts } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{casts._id}</td>
      <td>{casts.firstName}</td>
      <td>{casts.lastName}</td>
      <td>
        <img src={casts.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{casts.type}</td>
      <td>
        <Button variant="info" className="me-2" onClick={() => setViewShow(true) }>
          View
        </Button>
        <Button variant="success" className="me-2">
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true) } >Delete</Button>
      </td>
      <CastViewModel show={viewShow} setShow={setViewShow} cast={casts} />
      <CastDeleteModel show={deleteShow} setShow={setDeleteShow} castId={casts._id} />

    </tr>
  )
}

export default CastCell