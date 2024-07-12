import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#000000' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bangladesh Edu Hub</Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>Studies</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Application ▾</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Accelerate</MenuItem>
          <MenuItem onClick={handleCloseMenu}>News</MenuItem>
          <MenuItem onClick={handleCloseMenu}>About ▾</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
