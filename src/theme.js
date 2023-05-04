import { createTheme } from '@mui/material/styles';

const commonStyles = {
  fontFamily: 'Sigmar, cursive',
  textAlign: 'center',
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#fff',
      colored: '#43A047',
      text: '#000',
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
        subtitle2: {
          fontSize: '1rem',
          fontWight: 'bold',
          color: '#43A047',
        },
        body1: {
          fontSize: '0.9rem'
        }
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
          cursor: 'pointer',
          fontWeight: 'bold',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontWeight: 'bold',
        },
      },
    },
  },
});

const containerStyles = ({
  padding: '20px 30px',
  [theme.breakpoints.up('sm')]: {
    padding: '20px 30px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '20px 60px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '20px 120px',
  },
});


theme.components.MuiContainer = {
  styleOverrides: {
    root: containerStyles,
  },
};

export default theme;