import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import FilmsContext from "../utils/FilmsContext";
import GenreViewModel from "./GenreViewModel";

function GenresCell(props) {
  const { genres } = useContext(FilmsContext);
  const { film } = props;
  const [viewShow, setViewShow] = useState(false);

  return (
    <tr
      style={{
        verticalAlign: "middle",
        tableLayout: "fixed",
        wordWrap: "break-word",
      }}>


      <tobody>
        {genres.map(genre =>(
          <tr>
            <td style={{width: "20%"}}>{genre._id}</td>
            <td style={{width: "20%"}}>{genre.name}</td>
            <td>
        <Button
          variant="info"
          className="me-2"
          onClick={() => setViewShow(true)}
        >
          View
        </Button>
      </td>

          </tr>
        ))}
      </tobody>
       
      
      <GenreViewModel show={viewShow} setShow={setViewShow} film={film} />
    </tr>
      
        )
}

export default GenresCell ;
