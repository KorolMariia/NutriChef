import { NavLink } from 'react-router-dom';
import { Box, Container, Link, Typography, useTheme } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      bgcolor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      py: 1,
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: '100px'
    }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" >
          NutriChef © All Rights Reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <Link href="https://www.facebook.com/marie.korol.1" variant="body2" target="_blank" rel="noopener">
            <FacebookIcon sx={{ color: theme.palette.primary.main }} />
          </Link>
          <Link href="https://www.instagram.com/mariemarie1991/" variant="body2" target="_blank" rel="noopener">
            <InstagramIcon sx={{ color: theme.palette.primary.main }} />
          </Link>
          <Link href="https://www.linkedin.com/in/mariia-korol-842893229/" variant="body2" target="_blank" rel="noopener">
            <LinkedInIcon sx={{ color: theme.palette.primary.main }} />
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <NavLink to="/privacy" className='privacy'>
            Privacy Policy
          </NavLink>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;