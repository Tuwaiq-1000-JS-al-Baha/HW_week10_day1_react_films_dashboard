import { useContext, useState } from "react"
import { Button, Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import GenresCell from "../components/GenresCell"
import GenreAddModal from "../components/GenreAddModal"

function Genres() {
  const { genres } = useContext(FilmsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Films</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          add genres
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>Name</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {genres.map(genre => (
            <GenresCell key={genre._id} genre={genre} />
          ))}
        </tbody>
      </Table>
      <GenreAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Genres
