import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import UserCell from "../components/UserCell"

function Users() {
  const { users } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "18%" }}>first name</th>
          <th style={{ width: "18%" }}>last name</th>
          <th style={{ width: "18%" }}>avatar</th>
          <th style={{ width: "9%" }}>role</th>
          <th style={{ width: "36%" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserCell key={user._id} user={user} />
        ))}
      </tbody>
    </Table>
  )
}

export default Users
