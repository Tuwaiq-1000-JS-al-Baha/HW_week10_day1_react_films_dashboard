import { useContext } from "react"
import { Table } from "react-bootstrap"
import UserCell from "../components/UserCell"
import FilmsContext from "../utils/FilmsContext"

function User() {
  const { users } = useContext(FilmsContext)
  return (
    <>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>First-Name</th>
            <th style={{ width: "18%" }}>Last-Name</th>
            <th style={{ width: "18%" }}>Email</th>
            <th style={{ width: "9%" }}>Avatar</th>
            <th style={{ width: "18%" }}>Role</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserCell key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default User
