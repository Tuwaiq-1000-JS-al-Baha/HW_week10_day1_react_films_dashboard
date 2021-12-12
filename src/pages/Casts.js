import { useContext } from "react"
import { Table } from "react-bootstrap"
import CastCell from "../components/CastCell"
import FilmsContext from "../utils/FilmsContext"

function Casts() {
  const { casts, directors } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "18%" }}>FirstName</th>
          <th style={{ width: "18%" }}>Last Name</th>
          <th style={{ width: "18%" }}>Photo</th>
          <th style={{ width: "18%" }}>Type</th>
          <th style={{ width: "36%" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {casts.map(cast => (
          <CastCell casts={cast} key={cast._id} />
        ))}
      </tbody>
    </Table>
  )
}

export default Casts
