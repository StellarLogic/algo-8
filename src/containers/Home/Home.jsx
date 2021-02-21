import React, { useMemo, useEffect } from "react";
import { connect } from "react-redux";
import List from "./component/List";
import { makeStyles } from "@material-ui/core";
import constants from "../../constants";
import DoughnutChart from "./component/DoughnutChart";

const Home = ({ chart: { data: chart, default: selectedData } }) => {
  const classes = useStyles();

  return (
    <div className={classes.parent}>
      {selectedData && (
        <div className={classes.values}>
          <span className={classes.title}>NEW CLIENTS</span>
          <span className={classes.count}>+{selectedData.clientCount}</span>
          <span className={classes.percent}>
            +{selectedData.increasePercent}%
          </span>
        </div>
      )}

      <div className={classes.circle}>
        <DoughnutChart />
      </div>
      <div className={classes.list}>
        <List data={chart} />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: "50px 0",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  block: {
    height: "500px",
    background: theme.palette.common.white,
    margin: "50px 100px",
    border: `2px solid ${theme.palette.colors.primary}`,
    borderRadius: "10px",
    padding: "25px",
  },
  values: {
    display: "flex",
    flexDirection: "column",
    fontSize: "24px",
    maxWidth: "300px",
    [theme.breakpoints.down("lg")]: {
      minWidth: "200px",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "none",
      width: "auto",
      minWidth: "100%",
      marginBottom: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  circle: {
    flex: "1",
    maxWidth: "65%",
    [theme.breakpoints.down("md")]: {
      marginBottom: "50px",
    },
  },
  list: {
    maxWidth: "300px",
    [theme.breakpoints.down("lg")]: {
      minWidth: "350px",
    },

    [theme.breakpoints.down("md")]: {
      maxWidth: "none",
      width: "auto",
      minWidth: "100%",
    },
  },
  title: {
    color: theme.palette.colors.active,
    marginBottom: "50px",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    },
  },
  count: {
    color: theme.palette.colors.primary,
    fontSize: "48px",
    marginBottom: "50px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0",
    },
  },
  percent: {
    color: theme.palette.colors.primary,
    fontSize: "36px",
  },
}));

const mapStateToProps = (state) => ({
  chart: state.chart,
});

export default connect(mapStateToProps)(Home);
