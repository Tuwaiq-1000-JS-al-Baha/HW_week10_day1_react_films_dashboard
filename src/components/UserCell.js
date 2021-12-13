import { useState } from "react"
import { Button } from "react-bootstrap"
import UserDeleteModal from "./UserDeleteModal"
import UserViewModal from "./UserViewModal"

function UserCell(props) {
  const { user } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  if (!user) return <h1> Loding ...</h1>
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user._id}</td>
      <td>
        {user.firstName} {user.lastName}{" "}
      </td>
      <td>{user.email}</td>
      <td>
        <img src={user.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
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
      <UserViewModal show={viewShow} setShow={setViewShow} user={user} />
      <UserDeleteModal show={deleteShow} setShow={setDeleteShow} id={user._id} />
    </tr>
  )
}

export default UserCell
