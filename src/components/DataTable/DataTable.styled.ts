import { styled } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"

export const DataGridWrapper = styled(DataGrid)`
width: 100%;
max-width: 50rem;
height: 39.5rem;
margin: 0 auto;

& .MuiDataGrid-cell:hover {
  cursor: pointer;
}

& .MuiDataGrid-columnHeaderTitle {
  text-align: center;
}

@keyframes ShowRows {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
& .MuiDataGrid-row {
  animation: ShowRows 1.5s;
}

`


export const ButtonsContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`