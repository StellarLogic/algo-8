import React from "react";
import { makeStyles } from "@material-ui/core";

const AppContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.block}>{children}</div>;
};

const useStyles = makeStyles((theme) => ({
  block: {
    minHeight: "69vh",
    background: theme.palette.common.white,
    margin: "50px 100px",
    border: `2px solid ${theme.palette.colors.primary}`,
    borderRadius: "10px",
    padding: "25px",

    [theme.breakpoints.down("md")]: {
      margin: "50px ",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "25px ",
    },
  },
}));

export default AppContainer;
