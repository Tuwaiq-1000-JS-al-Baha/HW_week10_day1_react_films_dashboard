import { useState } from "react"
import { Button } from "react-bootstrap"
import UserDeleteModel from "./UserDeleteModal"
import UserViewModel from "./UserViewModal"

function UserCell(props) {
    const {user} = props
    const [viewShow, setViewShow] = useState(false)
    const [deleteShow, setDeleteShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user._id}</td>
      <td>{user.firstName}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{user.lastName}</td>
      <td>
        <img src={user.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{user.role}</td>
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
     <UserViewModel show={viewShow} setShow={setViewShow} user={user} />
     <UserDeleteModel show={deleteShow} setShow={setDeleteShow} userId={user._id} />
    </tr>
  )
}

export default UserCell