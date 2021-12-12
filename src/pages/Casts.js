import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import CastCell from "../components/CastCell"

function Casts() {
  const { films } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
        <th style={{ width: "20%" }}>FirstName</th>
          <th style={{ width: "18%" }}>LastName</th>
          <th style={{ width: "18%" }}>Action</th>


          
        </tr>
      </thead>
      <tbody>
        {films.map(film => (
          <CastCell key={film._id} film={film} />
        ))}
      </tbody>
    </Table>
  )
}

export default Casts
