import React from "react";
import ChartGrid from "./ChartGrid";
import ChartSidebar from "../utils/ChartSidebar";
import "../styles/ChartReportPage.css";

const ChartReportPage = () => {
  return (
    <div className="chart-report-container">
      <div className="chart-sidebar">
        <ChartSidebar />
      </div>
      <div className="chart-content">
        <ChartGrid />
      </div>
    </div>
  );
};

export default ChartReportPage;
