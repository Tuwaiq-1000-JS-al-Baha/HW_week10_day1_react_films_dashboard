import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import CastCell from "../components/CastCell"

function Casts() {
  const { casts } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "18%" }}>First Name</th>
          <th style={{ width: "18%" }}>Last Name</th>
          <th style={{ width: "18%" }}>Films</th>
          <th style={{ width: "9%" }}>Photo</th>
          <th style={{ width: "36%" }}>Type</th>
        </tr>
      </thead>
      <tbody>
        {casts.map(cast => (
          <CastCell key={cast._id} cast={cast} />
        ))}
      </tbody>
    </Table>
  )
}

export default Casts
