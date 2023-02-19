import React from "react";

//Chart Js
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { Link } from "react-router-dom";

const BarChart = ({ dataResponse }) => {
  //Feeds For Charts
  const labels = dataResponse.map((item) => item.date);
  const value = dataResponse.map((item) => item.value);

  //Initial Data For Chart

  const data = {
    labels: labels,
    datasets: [
      {
        label: "data chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: value,
      },
    ],
  };

  return (
    <div
      style={{ width: "50%", height: "50%", margin: "0 auto", marginTop: "5%" }}
    >
      <Bar data={data} />
      <Link to="/" style={{ marginLeft: "36%" }}>
        <button type="button" className="btn btn-secondary m-5">
          home
        </button>
      </Link>
    </div>
  );
};

export default BarChart;
