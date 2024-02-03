// Drawr.js
import React, { useRef, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Paper from "@material-ui/core/Paper";
import { Calendr } from "../../common/Calendar";
import { makeStyles } from "@material-ui/core/styles";

// Define the width of the drawer
const drawerWidth = 800;

// Define the styles for the component using Material-UI's makeStyles
const useStyles = makeStyles((theme) => ({
  paper: {
    width: drawerWidth,
    padding: theme.spacing(45, 7), // Adjusted padding to bring the content down
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Vertically center the content
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      width: "100%", // Full width on extra-small screens
      padding: theme.spacing(0, 0),
    },
  },
}));

const Drawr = (props) => {
  const classes = useStyles();
  const drawerRef = useRef(null);

  return (
    <Drawer
      anchor="right"
      open={props.isDrawerOpen}
      onClose={props.toggleDrawer}
      transitionDuration={500}
      ref={drawerRef}
      style={{ zIndex: 1000 }}
    >
      <Paper className={classes.paper} tabIndex={0}>
        {/* Header for the drawer */}
        <div className={classes.header}>Statistics</div>

        {/* Calendar component */}
        <Calendr
          openModal={props.openModal}
          openEditModal={props.openEditModal}
          date={props.date}
          setDate={props.setDate}
          isCurrentDate={props.isCurrentDate}
          setIsCurrentDate={props.setIsCurrentDate}
          style={{ width: "100%", height: "100%" }}
        />

        {/* Commented-out CustomInput component */}
        {/* <CustomInput /> */}
      </Paper>
    </Drawer>
  );
};

export default Drawr;
