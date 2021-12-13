import { useContext, useState } from "react"
import { Button, Table } from "react-bootstrap"
import CastCell from "../components/CastCell"
import CastDeleteModal from "../components/CastDeleteModal"
import CastViewModal from "../components/CastViewModal"
import FilmsContext from "../utils/FilmsContext"

function Cast() {
  const { casts } = useContext(FilmsContext)

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
            <CastCell key={cast._id} cast={cast} />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Cast
