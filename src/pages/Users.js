import { useContext } from "react"
import { Table } from "react-bootstrap"
import UserCell from "../components/UserCell"
import FilmsContext from "../utils/FilmsContext"

function Users() {
  const { users } = useContext(FilmsContext)
  if (!users) return <h1> loding...</h1>
  return (
    <>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "15%" }}>#</th>
            <th style={{ width: "20%" }}>Name</th>
            <th style={{ width: "18%" }}>email</th>
            <th style={{ width: "9%" }}>Avatar</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UserCell user={user} />
          ))}
        </tbody>{" "}
      </Table>
    </>
  )
}

export default Users
