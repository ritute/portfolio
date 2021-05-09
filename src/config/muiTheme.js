const DARK_GREY = '#18191F'
const TURQUOISE = '#2EC5CE'
const SUBTLE_BLUE_GRADIENT = 'linear-gradient(194.01deg, #D9E8EF 9.6%, #EAF2F5 89.64%)'

const muiTheme = {
  palette: {
    primary: {
      main: DARK_GREY,
      contrastText: '#FFF',
    },
    secondary: {
      main: TURQUOISE,
    },
    text: {
      primary: DARK_GREY,
      secondary: '#969BAB',
    },
    background: {
      default: '#FFF',
      paper: '#FFF',
      gradient: SUBTLE_BLUE_GRADIENT
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Manrope',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '4.5rem',
      lineHeight: '6.125rem',
    },
    h2: {
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: '4rem',
    },
    h3: {
      fontWeight: 800,
      fontSize: '2.5rem',
      lineHeight: '3.375rem',
    },
    h4: {
      fontWeight: 800,
      fontSize: '1.75rem',
      lineHeight: '2.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.625rem',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
    },
    button: {
      fontWeight: 700,
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    caption: {
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: '2rem',
    },
    overline: {
      fontWeight: 800,
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
      letterSpacing: '0.125rem',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      outlined: {
        border: `1px solid ${DARK_GREY}`,
        boxSizing: 'border-box',
        borderRadius: '8px',
        padding: '8px 16px',
        textTransform: 'none',
        transition: 'all 250ms linear',
        '&:hover': {
          color: 'white',
          background: DARK_GREY,
          transform: 'scale(1.1)',
        }
      },
    },
    MuiChip: {
      outlined: {
        color: TURQUOISE,
        border: `1px solid ${TURQUOISE}`,
        borderRadius: '6px',
        fontWeight: 700,
        fontSize: '0.75rem',
        lineHeight: '1rem',
      },
    },
    MuiCard: {
      root: {
        boxShadow: '0px 10px 20px rgba(41, 41, 42, 0.07)',
        borderRadius: '8px',
      },
    },
  }
}

export default muiTheme
