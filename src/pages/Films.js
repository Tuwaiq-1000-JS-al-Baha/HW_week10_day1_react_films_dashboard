import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import FilmCell from "../components/FilmCell"

function Films() {
  const { films } = useContext(FilmsContext)
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
        {films.map(film => (
          <FilmCell key={film._id} film={film} />
        ))}
      </tbody>
    </Table>
  )
}

export default Films
