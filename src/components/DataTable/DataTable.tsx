import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import { styled } from "@mui/material"
import rows from "src/data/MedalsContent.json"

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

const CustomData = styled(DataGrid)`
  height: 475px;
  width: 40%;
  margin: 0 auto;

  & .MuiDataGrid-cell:hover {
    cursor: pointer;
  }
`

export default function DataTable() {
  return (
    <>
      <CustomData
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            pageSize: 7
          }
        }}
        disableSelectionOnClick
      />
    </>
  )
}
