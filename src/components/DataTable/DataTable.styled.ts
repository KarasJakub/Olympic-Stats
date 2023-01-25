import { styled } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

export const DataGridWrapper = styled(DataGrid)`
height: 475px;
width: 100%;
max-width: 670px;
margin: 0 auto;

& .MuiDataGrid-cell:hover {
  cursor: pointer;
}

@media (min-width: 768px) {
    width: 85%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1400px) {
    width: 35%;
  }
`