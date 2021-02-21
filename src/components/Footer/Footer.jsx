import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.footer}>
      <p className={classes.copy}>© 2021 xyz. All Rights Reserved</p>
      <ul className={classes.list}>
        {data.map(({ id, name, path }) => (
          <li key={id} className={classes.link}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    background: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  link: {
    "& a": {
      textDecoration: "none",
      fontWeight: "bold",
      color: theme.palette.colors.primary,
      marginLeft: "20px",
      [theme.breakpoints.down("sm")]: {
        display: "inline-block",
        margin: "0 0 10px 0",
      },
    },
  },
  copy: {
    fontWeight: "bold",
    color: theme.palette.colors.primary,
    [theme.breakpoints.down("md")]: {
      order: 2,
    },
  },
}));

export default Footer;

const data = [
  {
    id: 1,
    name: "LEGAL ISSUES",
    path: "/",
  },
  {
    id: 2,
    name: "CAREERS",
    path: "/",
  },
  {
    id: 3,
    name: "REVIEWS",
    path: "/",
  },
  {
    id: 4,
    name: "ABOUT",
    path: "/",
  },
  {
    id: 5,
    name: "BLOG",
    path: "/",
  },
  {
    id: 6,
    name: "UPDATES",
    path: "/",
  },
];
