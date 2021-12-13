import { useContext } from "react"
import { Table } from "react-bootstrap"
import CastCell from "../components/CastCell"
import FilmsContext from "../utils/FilmsContext"

function Casts() {
  const { casts } = useContext(FilmsContext)
  if (!casts) return <h1> Loding ...</h1>
  return (
    <>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "30%" }}>Name</th>
            <th style={{ width: "18%" }}>Photo</th>
            <th style={{ width: "9%" }}>Type</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {casts.map(cast => (
            <CastCell cast={cast} />
          ))}
        </tbody>{" "}
      </Table>
    </>
  )
}

export default Casts
