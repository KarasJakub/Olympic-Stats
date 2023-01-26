import { styled } from "@mui/material"
import Typography from "@mui/material/Typography"

export const Header = styled("header")`
width: 100%;
padding: 2rem 0;
background-color: ${props => props.theme.palette.primary.main};
`

export const TitleBar = styled(Typography)`
color: ${props => props.theme.palette.secondary.main};
font-size: 2rem;
font-family: ${props => props.theme.typography.fontFamily};
text-align: center;
`