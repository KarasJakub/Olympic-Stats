import { styled } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

export const DataGridWrapper = styled(DataGrid)`
width: 100%;
max-width: 41rem;
height: 475px;
margin: 0 auto;

& .MuiDataGrid-cell:hover {
  cursor: pointer;
}

& .MuiDataGrid-columnHeaderTitle {
  text-align: center;
}
`