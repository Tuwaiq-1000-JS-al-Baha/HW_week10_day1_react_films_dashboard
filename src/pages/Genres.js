import { useContext } from "react"
import { Table } from "react-bootstrap"
import GenreCell from "../components/GenreCell"
import FilmsContext from "../utils/FilmsContext"

function Genres() {
  const { genres } = useContext(FilmsContext)
  return (
    <Table bordered hover style={{ tableLayout: "fixed" }}>
    <thead>
      <tr>
        <th style={{ width: "20%" }}>#</th>
        <th style={{ width: "50%" }}>Name</th>
        <th style={{ width: "30%" }}>Action</th>
      </tr>
    </thead>
    <tbody>
        {genres.map(genre => (
            <GenreCell genre={genre} key={genre._id} />
        ))}

    </tbody>
    </Table>
  )
}

export default Genres
