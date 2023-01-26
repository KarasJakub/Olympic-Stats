import React from "react"
import { GridColDef, plPL } from "@mui/x-data-grid"
import polishRows from "src/data/MedalsContentRowsPL.json"
import englishRows from "src/data/MedalsContentRowsEN.json"
import * as S from "src/components/DataTable/DataTable.styled"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

const englishColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Position",
    width: 80,
    editable: false
  },
  {
    field: "image",
    headerName: "Flag",
    // eslint-disable-next-line @next/next/no-img-element
    renderCell: props => <img src={props.value} alt="flag photo" />
  },
  {
    field: "country",
    headerName: "Country",
    width: 125,
    editable: false
  },

  {
    field: "gold",
    headerName: "Gold medals",
    type: "number",
    width: 110,
    editable: false
  },
  {
    field: "silver",
    headerName: "Silver medals",
    type: "number",
    width: 130,
    editable: false
  },
  {
    field: "bronze",
    headerName: "Bronze medals",
    type: "number",
    width: 135,
    editable: false
  },
  {
    field: "all",
    headerName: "All medals",
    type: "number",
    width: 90,
    editable: false
  }
]

const polishColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Pozycja",
    width: 80,
    editable: false
  },
  {
    field: "image",
    headerName: "Flaga",
    // eslint-disable-next-line @next/next/no-img-element
    renderCell: props => <img src={props.value} alt="flaga kraju" />
  },
  {
    field: "country",
    headerName: "Kraj",
    width: 125,
    editable: false
  },
  {
    field: "gold",
    headerName: "Złote medale",
    type: "number",
    width: 110,
    editable: false
  },
  {
    field: "silver",
    headerName: "Srebrne medale",
    type: "number",
    width: 130,
    editable: false
  },
  {
    field: "bronze",
    headerName: "Brązowe medale",
    type: "number",
    width: 135,
    editable: false
  },
  {
    field: "all",
    headerName: "Wszystkie",
    type: "number",
    width: 90,
    editable: false
  }
]

export default function DataTable() {
  const [columnsLanguage, setColumnsLanguage] = React.useState(englishColumns)
  const [rowsLanguage, setRowsLanguage] = React.useState(englishRows)
  const [toolbarLanguage, setToolbarLanguage] = React.useState({})
  function ChangeLaungage(lang: string) {
    const toolbarLaungage = plPL.components.MuiDataGrid.defaultProps.localeText
    if (lang === "en") {
      setColumnsLanguage(englishColumns)
      setRowsLanguage(englishRows)
      setToolbarLanguage({})
    }
    if (lang === "pl") {
      setColumnsLanguage(polishColumns)
      setRowsLanguage(polishRows)
      setToolbarLanguage(toolbarLaungage)
    } else {
      setColumnsLanguage(englishColumns)
      setRowsLanguage(englishRows)
      setToolbarLanguage({})
    }
  }
  return (
    <>
      <S.DataGridWrapper
        rows={rowsLanguage}
        columns={columnsLanguage}
        initialState={{
          pagination: {
            pageSize: 10
          }
        }}
        disableSelectionOnClick
        localeText={toolbarLanguage}
      />
      <S.ButtonsContainer>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            onClick={() => {
              ChangeLaungage("en")
            }}
          >
            English
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              ChangeLaungage("pl")
            }}
          >
            Polski
          </Button>
        </Stack>
      </S.ButtonsContainer>
    </>
  )
}
