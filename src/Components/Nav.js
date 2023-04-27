import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Container, Avatar, Tooltip, Toolbar, MenuItem, AppBar, IconButton, Typography, Menu, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'About', 'Recipes', 'Favorites'];
const settings = ['Profile', 'Logout'];

const Nav = () => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: theme.palette.secondary.main }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <img src="images/logo.png" alt="Logo" width="100" height="100" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: theme.palette.primary.main }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              <Box sx={{ padding: '30px 60px', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
                {pages.map((page) => (
                  <NavLink
                    className={({ isActive }) => (isActive ? 'active' : null)}
                    key={page} onClick={handleCloseNavMenu}
                    to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                    style={{ color: theme.palette.primary.text, textDecoration: 'none', fontSize: '1.3em' }}
                  >

                    {page}
                  </NavLink>
                ))}
              </Box>
            </Menu>
          </Box>
          <Typography
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <img src="images/logo.png" alt="Logo" width="150" height="150" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '40px', justifyContent: 'center' } }}>
            {pages.map((page) => (
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                key={page}
                onClick={handleCloseNavMenu}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                style={{ color: theme.palette.primary.main, textDecoration: 'none', fontSize: '1.3em' }}
              >
                {page}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;