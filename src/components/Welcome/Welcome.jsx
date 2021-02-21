import React from "react";
import { Button, Grid, makeStyles, Toolbar } from "@material-ui/core";

const Welcome = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.welcome}>
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={6} className={classes.left}>
          <span className={classes.bold}>Hello</span>, Welcome here
        </Grid>
        <Grid item xs={12} sm={6} className={classes.right}>
          Date :{" "}
          <Button className={classes.button}>01 04 2021 to 30 04 2021</Button>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  welcome: {
    background: theme.palette.colors.secondary,
    color: theme.palette.colors.primary,
    minHeight: "auto",
    paddingTop: "10px",
    paddingBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  container: {
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  left: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginBottom: "15px",
    },
  },

  right: {
    fontWeight: "bold",
    textAlign: "right",
    "& button": {
      color: theme.palette.colors.primary,
    },

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  button: {
    fontWeight: "bold",
    border: `2px solid ${theme.palette.colors.primary}`,
  },
}));

export default Welcome;
