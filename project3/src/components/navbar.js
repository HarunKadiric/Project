import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const logoUrl = 'https://cdn.freebiesupply.com/logos/large/2x/razer-logo-png-transparent.png';
  return (
    <AppBar position="static">
      <Toolbar>
      <Link to="/" style={{ flexGrow: 1, textDecoration: 'none' }}>
          <img src={logoUrl} alt="Logo" style={{ height: '50px' }} /> 
        </Link>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
