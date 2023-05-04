import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import FooterLink from './FooterLink';
import { Box, Typography, useTheme } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = memo(() => {
  const theme = useTheme();

  return (
    <Box component="footer" role='contentinfo'
      sx={{
        bgcolor: theme.palette.primary.colored,
        color: theme.palette.primary.main,
        py: 1,
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1
      }}>
      <Typography variant="body1" >
        NutriChef © 2023 All Rights Reserved.
      </Typography>
      <Box display='flex'>
        <FooterLink
          href="https://www.facebook.com/marie.korol.1"
          ariaLabel="Facebook"
          icon={<FacebookIcon sx={{ color: theme.palette.primary.main }} />}
        />
        <FooterLink
          href="https://www.instagram.com/mariemarie1991/"
          ariaLabel="Instagram"
          icon={<InstagramIcon sx={{ color: theme.palette.primary.main }} />}
        />
        <FooterLink
          href="https://www.linkedin.com/in/mariia-korol-842893229/"
          ariaLabel="LinkedIn"
          icon={<LinkedInIcon sx={{ color: theme.palette.primary.main }} />}
        />
      </Box>
      <Box display='flex' justifyContent='center'>
        <NavLink to="/privacy" className='privacy'>
          Privacy Policy
        </NavLink>
      </Box>
    </Box>
  );
});

export default Footer;