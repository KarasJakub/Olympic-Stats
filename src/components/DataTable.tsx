import { useEffect, useState } from "react"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import { darken, lighten } from "@mui/material/styles"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Position",
    width: 100,
    editable: true
  },
  {
    field: "country",
    headerName: "Country",
    width: 120,
    editable: true
  },
  {
    field: "gold",
    headerName: "Gold medals",
    type: "number",
    width: 110,
    editable: true
  },
  {
    field: "silver",
    headerName: "Silver medals",
    type: "number",
    width: 110,
    editable: true
  },
  {
    field: "bronze",
    headerName: "Bronze medals",
    type: "number",
    width: 110,
    editable: true
  },
  {
    field: "all",
    headerName: "All medals",
    type: "number",
    width: 110,
    editable: true
  }
]

const rows = [
  { id: 1, country: "Norway", gold: 16, silver: 8, bronze: 13, all: 37 },
  { id: 2, country: "Germany", gold: 12, silver: 10, bronze: 5, all: 27 },
  { id: 3, country: "China", gold: 9, silver: 4, bronze: 2, all: 15 },
  { id: 4, country: "USA", gold: 8, silver: 10, bronze: 7, all: 25 },
  { id: 5, country: "Sweden", gold: 5, silver: 5, bronze: 5, all: 18 },
  { id: 6, country: "Netherlands", gold: 8, silver: 5, bronze: 4, all: 17 },
  { id: 7, country: "Austria", gold: 7, silver: 7, bronze: 4, all: 18 },
  { id: 8, country: "Switzerland", gold: 7, silver: 2, bronze: 5, all: 14 },
  { id: 9, country: "ROC", gold: 6, silver: 12, bronze: 14, all: 32 },
  { id: 10, country: "France", gold: 5, silver: 7, bronze: 2, all: 14 }
]

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              pageSize: 5
            }
          }}
        />
      </>
    </div>
  )
}
