import { useContext } from "react"
import { Table } from "react-bootstrap"
import GenresCell from "../components/GenresCell"
import FilmsContext from "../utils/FilmsContext"

function Genres() {
  const { genres } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "18%" }}>name</th>
        </tr>
      </thead>
      <tbody>
        {genres.map(genre => (
          <GenresCell key={genre._id} genre={genre} />
        ))}
      </tbody>
    </Table>
  )
}

export default Genres
