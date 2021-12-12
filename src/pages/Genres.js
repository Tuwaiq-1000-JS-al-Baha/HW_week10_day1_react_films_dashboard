import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import GenerCell from "../components/FilmCell"

function Genres() {
  const { genres } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
      <thead>
        <tr>
          <th style={{ width: "9%" }}>#</th>
          <th style={{ width: "25%" }}>Name</th>
        
        </tr>
      </thead>
      <tbody>
        {genres.map(gener => (
          <GenerCell key={gener._id} gener={gener} />
        ))}
      </tbody>
    </Table>
  )
}

export default Genres
