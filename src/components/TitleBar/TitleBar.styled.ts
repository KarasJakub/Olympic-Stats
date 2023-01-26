import { styled } from "@mui/material"
import Typography from "@mui/material/Typography"

export const TitleBar = styled(Typography)`
width: 100%;
padding: 2rem 0;
background-color: ${props => props.theme.palette.primary.main};
color: ${props => props.theme.palette.secondary.main};
font-size: 1.5rem;
color: ${props => props.theme.typography.fontFamily};
text-align: center;
`