import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../Customer Management/Header&Footer/candyCloudLOGO.png'
import './NavBar.css'

const navButtons = [
  {
    label: 'Home',
    pages: ['/mainDashboard']
  },
  {
    label: 'Order Details',
    pages: ['/deliveryOrder']
  },
  {
    label: 'Deliveries',
    pages: ['/deliverydata']
  },
  {
    label: 'Drivers',
    pages: ['/drivers']
  },
  {
    label: 'Tracking',
    pages: ['/tracking']
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeButton, setActiveButton] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButtonClick = (event, label) => {
    setActiveButton(label);
  };

  return (
    <AppBar position="static" className='navBar' sx={{ backgroundColor: '#c4c4c47b' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navButtons.map(({ label, pages }) => (
                <MenuItem key={label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {label}
                    {pages.map((page, index) => (
                      <Link key={index} to={page} className={`nav-link${activeButton === label ? ' active' : ''}`} onClick={(event) => handleButtonClick(event, label)}>
                        {index === 0 ? '' : ', '}{page}
                      </Link>
                    ))}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src={logo} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className='logo'/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Candy Cloud
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navButtons.map(({ label, pages }) => (
              <Button
                key={label}
                onClick={() => {
                  handleButtonClick(label);
                  handleCloseNavMenu();
                }}
                sx={{
                  my: 2,
                  color: activeButton === label ? 'primary.main' : 'inherit',
                  display: 'block',
                }}
              >
                <Link to={pages[0]} className="nav-link">{label}</Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;