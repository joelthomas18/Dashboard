import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ apiDataFromPie }) => {
  const label = apiDataFromPie.map((item) => {
    return item.label;
  });
  const value = apiDataFromPie.map((item) => {
    return item.value;
  });
  let chartData = {
    labels: label,
    datasets: [
      {
        label: "",
        data: value,
        backgroundColor: ["rgb(96, 158, 96)"],
        borderWidth: 2,
        tension: 0.5,
        borderColor: ["white"],
      },
    ],
  };

  return (
    <div className="w-[30%]  p-3 ml-9 rounded-md hover:scale-105 cursor-pointer ease-in duration-200 bg-white shadow-xl">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
