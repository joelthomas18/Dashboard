import React, { useState, useEffect } from "react";
import Name from "./Name";
import Graph from "./Graph";
import PageNumber from "./PageNumber";
import PieChart from "./PieChart";
import Table from "./Table";
import NameCard from "./NameCard";

const Content = () => {
  const [apiDataFromChart, setApiDataFromChart] = useState([]);
  const [apiDataFromPie, setApiDataFromPie] = useState([]);
  const [apiDataFromTable, setApiDataFromTable] = useState([]);
  console.log(apiDataFromChart);

  const getChartData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/graph");
      const data = await response.json();
      setApiDataFromChart(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPieData = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/pie-chart");
      const data = await res.json();
      setApiDataFromPie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTableData = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/table");
      const data = await res.json();
      setApiDataFromTable(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChartData();
    getPieData();
    getTableData();
  }, []);

  return (
    <div className="">
      <Name />
      <div className="flex">
        <Graph apiDataFromChart={apiDataFromChart} />
        <PieChart apiDataFromPie={apiDataFromPie} />
      </div>
      <div className="flex gap-3">
        <Table apiDataFromTable={apiDataFromTable} />
        <NameCard />
      </div>
      <PageNumber />
    </div>
  );
};

export default Content;
