import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import CastCell from "../components/CastCell"

function    Casts() {
  const { casts } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "50%" }}>Name</th>
        
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