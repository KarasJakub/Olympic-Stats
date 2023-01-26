import { GridColDef } from "@mui/x-data-grid"
import rows from "src/data/MedalsContentRows.json"
import * as S from "src/components/DataTable/DataTable.styled"

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Position",
    width: 80,
    editable: true
  },
  {
    field: "country",
    headerName: "Country",
    width: 125,
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
    width: 120,
    editable: true
  },
  {
    field: "bronze",
    headerName: "Bronze medals",
    type: "number",
    width: 120,
    editable: true
  },
  {
    field: "all",
    headerName: "All medals",
    type: "number",
    width: 90,
    editable: true
  }
]

export default function DataTable() {
  return (
    <>
      <S.DataGridWrapper
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
