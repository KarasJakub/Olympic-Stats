import {  Poppins } from '@next/font/google';
import { createTheme } from '@mui/material/styles';

export const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0D1F2B',
    },
    secondary: {
      main: '#CECECE',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;