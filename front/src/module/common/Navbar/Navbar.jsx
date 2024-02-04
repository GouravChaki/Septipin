import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Link,
  CssBaseline,
} from "@mui/material";
import { GitHub, Twitter, Instagram, Menu } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const drawerWidth = 240;

const styles = {
  appBar: {
    backgroundColor: "#FBBEBE",
    color: "#AB2D2D",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: "none",
    "@media (maxWidth: 600px)": {
      display: "block",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
  },
  hoverEffect: {
    "&:hover": {
      backgroundColor: "#FFCDD2", // Change the background color here
      color: "#FFFFFF",
    },
    width: "100%",
    padding: "20px",
  },
  socialIcons: {
    display: "flex",
    "& > *": {
      margin: "0 12px",
    },
  },
};

const Navbar = () => {
  const { logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { to: "/statistics", label: "Statistical Tracker" },
    { to: "/media", label: "Media" },
    { to: "/profile", label: "Profile" },
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
            style={{ ...styles.hoverEffect }}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem
          button
          key="Log out"
          style={{ ...styles.hoverEffect }}
          onClick={() => {
            logout();
          }}
        >
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar style={styles.toolbar}>
          <Menu onClick={handleDrawerToggle} />
          <Typography variant="h6">Septipin</Typography>
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
