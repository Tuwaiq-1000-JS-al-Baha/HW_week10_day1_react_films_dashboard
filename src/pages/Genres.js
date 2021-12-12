import { Button } from "react-bootstrap"
import { useContext } from "react"
import { Table } from "react-bootstrap"
import FilmsContext from "../utils/FilmsContext"
import FilmCell from "../components/FilmCell"
import GenraCall from"../components/GenraCall"

function Genres() {
    const { genras } = useContext(FilmsContext)

    return ( 
        <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#id</th>
            <th style={{ width: "18%" }}>name</th>
           
            <th style={{ width: "36%" }}>Actions</th>

          
           
          </tr>
        </thead>
        <tbody>
          {genras.map(genra => (
            <GenraCall key={genra._id} genra={genra} />
          ))}
        </tbody>
      </Table>
     );
}

export default Genres;