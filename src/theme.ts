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
  breakpoints: {
    values: {
      xs: 25, // 400px
      sm: 31.25, // 500px
      md: 48, // 768px
      lg: 64, // 1024px
      xl: 80, // 1280px
    }
  }
});

export default theme;