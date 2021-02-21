import React from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

const DoughnutChart = ({ chart: { data: chartData } }) => {
  const data = {
    labels: chartData.map((chart) => chart.title),
    datasets: [
      {
        data: new Array(chartData.length).fill(1),
        backgroundColor: chartData.map((chart) => chart.color),
        borderColor: chartData.map((chart) => chart.color),
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

const options = {
  legend: {
    display: false,
  },
  responsive: true,
  cutoutPercentage: 95,
};

const mapStateToProps = (state) => ({
  chart: state.chart,
});

export default connect(mapStateToProps)(DoughnutChart);
