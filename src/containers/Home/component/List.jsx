import React from "react";
import { makeStyles } from "@material-ui/core";
import Names from "./Names";

const List = ({ data }) => {
  const classes = useStyles(data);
  return (
    <ul className={classes.list}>
      {data.map(({ id, ...props }) => (
        <li key={id}>
          <Names id={id} {...props} />
        </li>
      ))}
    </ul>
  );
};

const useStyles = makeStyles((theme) => ({
  list: {
    listStyle: "none",
    margin: 0,

    [theme.breakpoints.down("lg")]: {
      padding: "0",
    },

    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "fit-content",
      margin: "0 auto",
    },

    "& li": {
      marginBottom: "20px",
    },
  },
}));

export default List;
