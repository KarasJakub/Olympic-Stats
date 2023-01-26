import { styled } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

export const DataGridWrapper = styled(DataGrid)`
width: 100%;
max-width: 44rem;
height: 39.5rem;
margin: 0 auto;

& .MuiDataGrid-cell:hover {
  cursor: pointer;
}

& .MuiDataGrid-columnHeaderTitle {
  text-align: center;
}
`

export const ButtonsContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`