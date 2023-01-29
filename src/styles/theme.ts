const breakpoints = {
  xs: 25, // 400px
  s: 31.25, // 500px
  m: 48, // 768px
  l: 64, // 1024px
  xl: 80, // 1280px
}

const theme = {
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800
  },
  color: {
    primary: "#0D1F2B",
    secondary: "#CECECE",
  },
  MQ: {
    xs: `@media (min-width: ${breakpoints.xs}em)`,
    s: `@media (min-width: ${breakpoints.s}em)`,
    m: `@media (min-width: ${breakpoints.m}em)`,
    l: `@media (min-width: ${breakpoints.l}em)`,
    xl: `@media (min-width: ${breakpoints.xl}em)`,
  }
}

export default theme
