import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const Graph = ({ apiDataFromChart }) => {
  const x = apiDataFromChart.map((item) => {
    return item.x;
  });
  const y = apiDataFromChart.map((item) => {
    return item.y;
  });
  let chartData = {
    labels: x,
    datasets: [
      {
        label: "Graph",
        data: y,
        backgroundColor: ["rgb(152, 222, 246)"],
        borderWidth: 2,
        tension: 0.5,
        borderColor: ["rgb(152, 222, 246)"],
      },
    ],
  };

  return (
    <div className="w-[60%] p-3 ml-9 rounded-md hover:scale-105 cursor-pointer ease-in duration-200 bg-white shadow-xl">
      <Line data={chartData} />
    </div>
  );
};

export default Graph;
