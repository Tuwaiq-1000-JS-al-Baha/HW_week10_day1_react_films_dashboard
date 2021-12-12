import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import UsersCell from "../components/UserCell"

function Users() {
  const { users } = useContext(FilmsContext)

  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "9%" }}>First Name</th>
          <th style={{ width: "9%" }}>Last Name</th>
          <th style={{ width: "18%" }}>Email</th>
          <th style={{ width: "18%" }}>Avatar</th>
          <th style={{ width: "18%" }}>Rol</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UsersCell key={user._id} user={user} />
        ))}
      </tbody>
    </Table>
  )
}

export default Users
