import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"

function Casts() {
  const { casts } = useContext(FilmsContext)
  if (!casts) return <h1>Loading..</h1>
  return (
    <>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>#</th>
            <th style={{ width: "18%" }}>name </th>
            <th style={{ width: "18%" }}>type</th>
            <th style={{ width: "18%" }}>photo</th>
            <th style={{ width: "18%" }}>films</th>
            <th style={{ width: "34%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {casts.map(cast => (
            <tr>
              <td>{cast._id}</td>
              <td>
                {cast.firstName} {cast.lastName}
              </td>
              <td>
                <img src={cast.photo} alt=""/>
              </td>

              <td>{cast.films}</td>
              <td>{cast.type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Casts