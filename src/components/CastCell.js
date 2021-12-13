import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import FilmsContext from "../utils/FilmsContext";
import CastViewModel  from "./CastViewModel";

function GenresCell(props) {
  const { casts } = useContext(FilmsContext);
  const { film } = props;
  const [viewShow, setViewShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false)


  return (
    <tr
      style={{
        verticalAlign: "middle",
        tableLayout: "fixed",
        wordWrap: "break-word",
      }}>


      <tobody>
        {casts.map(cast =>(
          <tr>
            <td style={{width: "20%"}}>{cast.firstName}</td>
            <td style={{width: "20%"}}>{cast.lastName}</td>
            <td>
        <Button
          variant="info"
          className="me-2"
          onClick={() => setViewShow(true)}
        >
          View
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>

          </tr>
        ))}
      </tobody>
       
      
      <CastViewModel show={viewShow} setShow={setViewShow} film={film} />
    </tr>
      
        )
}

export default GenresCell ;
