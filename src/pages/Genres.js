import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import GenresCell from "../components/GenresCell"

function Genres() {
  const { films } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
        <th style={{ width: "20%" }}>ID</th>
          <th style={{ width: "18%" }}>Name</th>
          <th style={{ width: "18%" }}>Actions</th>


          
        </tr>
      </thead>
      <tbody>
        {films.map(film => (
          <GenresCell key={film._id} film={film} />
        ))}
      </tbody>
    </Table>
  )
}

export default Genres
