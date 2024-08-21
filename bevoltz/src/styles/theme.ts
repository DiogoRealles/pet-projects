const defaultTheme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: {
      small: '5px',
      medium: '10px',
      large: '20px',
      xlarge: '50px',
      xxlarge: '100px',
    },
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.08)',
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    sizes: {
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '2rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4rem',
      xxlarge: '4.8rem',
      xxxlarge: '5.6rem',
      huge: '6.4rem',
    },
  },
  colors: {
    white: '#fff',
    black: '#000',

    green_100: '#61E4A3',
    green_300: '#223739',

    gray_30: '#f5f7f6',
    gray_50: '#EEEFF0',
    gray_100: '#9B9B9B',
    gray_200: '#626262',
    gray_300: '#494949',
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4rem',
    xlarge: '4.8rem',
    xxlarge: '89.6px',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const

export default defaultTheme
