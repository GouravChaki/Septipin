import { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem , ListItemText, Link, CssBaseline } from '@mui/material';
import { GitHub, Twitter, Instagram, Menu } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

const styles = {
  appBar: {
    backgroundColor: '#FBBEBE',
    color: '#AB2D2D',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: 'none',
    '@media (maxWidth: 600px)': {
      display: 'block',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  hoverEffect: {
    '&:hover': {
      backgroundColor: '#AB2D2D',
      color: '#FBBEBE'
    },
  },
  socialIcons: {
    display: 'flex',
    '& > *': {
      margin: '0 8px',
    },
  },
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { to: '/statistics', label: 'Statistical Tracker' },
    { to: '/media', label: 'Media' },
    { to: '/nutrition-tracker', label: 'Nutrient Tracker' },
    { to: '/profile', label: 'Profile' },
    { to: '/', label: 'Log out' },
  ];

  const drawer = (
    <div>
      <List>
        {navLinks.map((item) => (
          <ListItem
            button
            key={item.label}
            component={RouterLink}
            to={item.to}
            style={{ ...styles.hoverEffect, width: '100%' }}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar style={styles.toolbar}>
          <Menu onClick={handleDrawerToggle} />
          <Typography variant="h6">Your Logo</Typography>
          <div style={styles.socialIcons}>
            <Link href="#" color="inherit">
              <GitHub />
            </Link>
            <Link href="#" color="inherit">
              <Twitter />
            </Link>
            <Link href="#" color="inherit">
              <Instagram />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <nav style={styles.drawer}>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: styles.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;
