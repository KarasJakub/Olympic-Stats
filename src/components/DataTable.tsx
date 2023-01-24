import { useEffect, useState } from "react"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import { darken, lighten } from "@mui/material/styles"

const columns: GridColDef[] = [
  {
    field: "test",
    headerName: "podium",
    width: 150,
    editable: true
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`
  }
]

const rows = [
  { id: 1, lastName: "Snow", test: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", test: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", test: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", test: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", test: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", test: null, age: 150 },
  { id: 7, lastName: "Clifford", test: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", test: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", test: "Harvey", age: 65 }
]

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <>
        <DataGrid rows={rows} columns={columns} />
      </>
    </div>
  )
}
