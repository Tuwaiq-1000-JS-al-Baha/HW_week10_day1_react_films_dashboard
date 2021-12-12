import { useContext } from "react";
import { Table } from "react-bootstrap";
import UserCell from "../components/UserCell";
import FilmsContext from "../utils/FilmsContext";

function Users() {
    const {users} = useContext(FilmsContext)
    return (  <Table bordered hover style={{ tableLayout: "fixed" }}>
    <thead>
      <tr>
        <th style={{ width: "9%" }}>#</th>
        <th style={{ width: "18%" }}>First Name</th>
        <th style={{ width: "18%" }}>Last Name</th>
        <th style={{ width: "18%" }}>Poster</th>
        <th style={{ width: "9%" }}>Role</th>
        <th style={{ width: "36%" }}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
          <UserCell user={user} key={user._id} />
      ))}
    </tbody>
  </Table> );
}

export default Users;