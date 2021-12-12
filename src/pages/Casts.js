import { useContext } from "react";
import { Table } from "react-bootstrap";
import CastCell from "../components/CastCell";
import FilmsContext from "../utils/FilmsContext";

function Casts() {

    const {casts}=useContext(FilmsContext)
    return (   <Table bordered hover style={{ tableLayout: "fixed" }}>
    <thead>
      <tr>
        <th style={{ width: "9%" }}>#</th>
        <th style={{ width: "18%" }}>Name</th>
        <th style={{ width: "18%" }}>photo</th>
        <th style={{ width: "18%" }}>type</th>
        <th style={{ width: "36%" }}>Actions</th>
      </tr>
    </thead>
    <tbody>
      {casts.map(cast => (
        <CastCell key={cast._id} cast={cast} />
      ))}
    </tbody>
  </Table> );
}

export default Casts;