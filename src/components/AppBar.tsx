import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material"

const CustomizedTypography = styled(Typography)`
  width: 100%;
  background-color: #0d1e2a;
  text-align: center;
  padding: 2rem 0;
  font-size: 1.5rem;
  color: #ebe6df;
`

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomizedTypography>
        2020 Winter Olympics Medals Stats
      </CustomizedTypography>
    </Box>
  )
}
