import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import FilmCell from "../components/FilmCell"
import CastCall from"../components/CastCell"

function Casts() {
    const { casts } = useContext(FilmsContext)

    return ( 
        <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#id</th>
            <th style={{ width: "18%" }}>name</th>
            <th style={{ width: "18%" }}>photo</th>
            <th style={{ width: "36%" }}>Actions</th>
            <th style={{ width: "18%" }}>type</th>

          
           
          </tr>
        </thead>
        <tbody>
          {casts.map(cast => (
            <CastCall key={cast._id} cast={cast} />
          ))}
        </tbody>
      </Table>
     );
}

export default Casts;