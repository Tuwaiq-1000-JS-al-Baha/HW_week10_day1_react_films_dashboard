import { useContext, useState } from "react"
import { Button, Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import CastCell from "../components/CastCell"
import CastAddModal from "../components/CastAddModal"

function Casts() {
  const { casts } = useContext(FilmsContext)
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
            <th style={{ width: "18%" }}>firstName</th>
            <th style={{ width: "18%" }}>lastName</th>
            <th style={{ width: "18%" }}>photo</th>
            <th style={{ width: "9%" }}>type</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {casts.map(cast => (
            <CastCell key={cast._id} cast={cast} />
          ))}
        </tbody>
      </Table>
      <CastAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Casts
