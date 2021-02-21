import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Chart = ({ selectedChart }) => {
  const classes = useStyles({
    color: selectedChart && selectedChart.color,
  });

  if (!selectedChart) {
    return <Redirect to="/dashboard" />;
  }

  const data = {
    labels: selectedChart.graph.label,
    datasets: [
      {
        data: selectedChart.graph.data,
        backgroundColor: selectedChart.color,
      },
    ],
  };

  return (
    <div className={classes.block}>
      <Link to="/dashboard">
        <ArrowBackIcon className={classes.icon} />
      </Link>
      {selectedChart && (
        <Bar data={data} options={options} className={classes.chart} />
      )}
    </div>
  );
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const useStyles = makeStyles((theme) => ({
  block: {
    position: "relative",
    padding: "25px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  },

  chart: {
    height: "400px",
  },

  icon: {
    position: "absolute",
    right: "5px",
    top: "5px",
    fontSize: "36px",
    background: ({ color }) => color,
    color: theme.palette.common.white,
    cursor: "pointer",
    borderRadius: "50%",
    zIndex: "9",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      right: "-5px",
      top: "-5px",
    },
  },
}));

const mapStateToProps = (state) => ({
  selectedChart: state.chart.default,
});

export default connect(mapStateToProps)(Chart);
