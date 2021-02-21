import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import constants from "../../../constants";

const Names = ({
  title,
  id,
  color,
  chart: { data, default: selectedData },
  setDefault,
}) => {
  const classes = useStyles({ color });

  const handleClick = (id) => {
    setDefault(data.find((value) => id === value.id));
  };

  return (
    <Link
      className={`${classes.link} ${
        selectedData && selectedData.id == id ? "active" : ""
      }`}
      to={{ pathname: `/dashboard/chart/${title.toLowerCase()}` }}
      onClick={() => handleClick(id)}
    >
      <span className={classes.nameText}>{title}</span>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    position: "relative",
    color: "#aaa",
    fontWeight: "bold",
    fontSize: "38px",
    paddingLeft: "35px",
    transition: "all 0.2s",

    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "0",
      width: "25px",
      height: "5px",
      transform: "translateY(-50%)",
      transition: "all 0.2s",
      background: ({ color }) => color,
    },

    "&.active::before": {
      height: "7px",
    },

    "&:hover": {
      color: theme.palette.colors.active,
    },
    "&:hover:before": {
      transform: "translate(-5px, -50%)",
    },
    "&.active": {
      color: theme.palette.colors.active,
      background: console.log(theme.breakpoints),
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
    },
  },
}));

const mapStateToProps = (state) => ({
  chart: state.chart,
});

const mapDispatchToProps = (dispatch) => ({
  setDefault: (payload) =>
    dispatch({
      type: constants.SET_DEFAULT,
      payload,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Names);
