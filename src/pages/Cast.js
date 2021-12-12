import { useContext, useState } from "react"
import { Button, Table } from "react-bootstrap"
import CastDeleteModal from "../components/CastDeleteModal"
import CastViewModal from "../components/CastViewModal"
import FilmsContext from "../utils/FilmsContext"

function Cast() {
  const { casts } = useContext(FilmsContext)

  const [viewShowCast, setViewShowCast] = useState(false)
  const [deleteCastShow, setDeleteCastShow] = useState(false)
  return (
    <>
      {" "}
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>First-Name</th>
            <th style={{ width: "18%" }}>Last-Name</th>
            <th style={{ width: "18%" }}>Films</th>
            <th style={{ width: "9%" }}>Photo</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {casts.map(cast => (
            <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
              <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{cast._id}</td>
              <td>
                {cast.firstName} {cast.lastName}
              </td>
              <td>{cast.lastName}</td>
              <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{cast.Films}</td>
              <td>
                <img src={cast.photo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
              </td>
              <td>
                <Button variant="info" className="me-2" onClick={() => setViewShowCast(true)}>
                  View
                </Button>
                <Button variant="success" className="me-2">
                  Edit
                </Button>
                <Button variant="danger" onClick={() => setDeleteCastShow(true)}>
                  Delete
                </Button>
              </td>
              <CastViewModal show={viewShowCast} setShow={setViewShowCast} cast={cast} />
              <CastDeleteModal
                deleteCastShow={deleteCastShow}
                setDeleteCastShow={setDeleteCastShow}
                castId={cast._id}
              />
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Cast
