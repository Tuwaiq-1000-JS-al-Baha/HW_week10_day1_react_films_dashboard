import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import CastsCell from "../components/CastsCell"
import CastCell from "../components/CastsCell"
function Casts() {
  const { casts } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "18%" }}>Title</th>
          <th style={{ width: "18%" }}>Description</th>
          <th style={{ width: "18%" }}>Poster</th>
          <th style={{ width: "9%" }}>Rating</th>
          <th style={{ width: "36%" }}>Actions</th>
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
