import { useContext } from "react"
import {  Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"


import UserCell from "../components/UserCell"

function User() {
  const { users } = useContext(FilmsContext)
  console.log(users)
  return (
    <>
      {/* <h1 style={{ marginTop: 10 }}>User</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          ADD
        </Button>
      </div> */}
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>firstName</th>
            <th style={{ width: "18%" }}>LastName</th>
            <th style={{ width: "18%" }}>avatar</th>
            <th style={{ width: "9%" }}>email</th>
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
