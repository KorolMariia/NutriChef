import { createTheme } from '@mui/material/styles';

const commonStyles = {
  fontFamily: 'Sigmar, cursive',
  textAlign: 'center',
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      text: '#000',
    },
    secondary: {
      main: '#43A047',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: commonStyles,
        h4: {
          ...commonStyles,
          paddingBottom: '15px',
        },
        h5: {
          fontSize: '1.1rem',
        },
        subtitle1: {
          ...commonStyles,
          borderBottom: '2px solid #000',
          marginBottom: '40px',
          padding: '15px'
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          marginRight: '0.5rem',
          color: '#43A047',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          paddingLeft: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontWeight: 'bold',
          '&:hover': {
            color: '#000',
          },
        },
      },
    },
  },
});

export default theme;