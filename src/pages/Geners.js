import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import GenreCell from "../components/GenreCell"

function Geners() {
  const { geners } = useContext(FilmsContext)

  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "33%" }}>#</th>
          <th style={{ width: "33%" }}>Name</th>
          <th style={{ width: "34%" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {geners.map(genre => (
          <GenreCell key={genre._id} genre={genre} />
        ))}
      </tbody>
    </Table>
  )
}
export default Geners
