import React from "react"
import { GridColDef, plPL } from "@mui/x-data-grid"
import polishRows from "src/data/MedalsContentRowsPL.json"
import englishRows from "src/data/MedalsContentRowsEN.json"
import * as S from "src/components/DataTable/DataTable.styled"

const englishColumns: GridColDef[] = [
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
    width: 130,
    editable: true
  },
  {
    field: "bronze",
    headerName: "Bronze medals",
    type: "number",
    width: 135,
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

const polishColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "Pozycja",
    width: 80,
    editable: true
  },
  {
    field: "country",
    headerName: "Kraj",
    width: 125,
    editable: true
  },
  {
    field: "gold",
    headerName: "Złote medale",
    type: "number",
    width: 110,
    editable: true
  },
  {
    field: "silver",
    headerName: "Srebrne medale",
    type: "number",
    width: 130,
    editable: true
  },
  {
    field: "bronze",
    headerName: "Brązowe medale",
    type: "number",
    width: 135,
    editable: true
  },
  {
    field: "all",
    headerName: "Wszystkie",
    type: "number",
    width: 90,
    editable: true
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
            pageSize: 7
          }
        }}
        disableSelectionOnClick
        localeText={toolbarLanguage}
      />
      <S.Button
        onClick={() => {
          ChangeLaungage("en")
        }}
      >
        English
      </S.Button>
      <S.Button
        onClick={() => {
          ChangeLaungage("pl")
        }}
      >
        Polski
      </S.Button>
    </>
  )
}
