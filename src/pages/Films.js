import { useContext, useState } from "react"
import { Button, Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import FilmCell from "../components/FilmCell"
import FilmAddModal from "../components/FilmAddModal"

function Films() {
  const { films } = useContext(FilmsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Films</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          ADD
        </Button>
      </div>
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
      <FilmAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Films
