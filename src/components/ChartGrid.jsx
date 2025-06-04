// ChartGrid.jsx
import React from "react";
import ChartCard from "./ChartCard";
import GenericChartPreview from "./GenericChartPreview";
import "../styles/ChartGrid.css";

const chartTypes = ["bar", "pie", "line", "doughnut"]; // Add more if needed

const ChartGrid = () => {
  const charts = Array.from({ length: 15 });

  return (
    <div className="chart-grid">
      {charts.map((_, index) => {
        const type = chartTypes[index % chartTypes.length]; // cycle through chart types
        return (
          <ChartCard key={index} title={`पेशाको अनुसार घरधुरी`}>
            <GenericChartPreview
              type={type}
              labelKey="profession"
              valueKey="households"
              chartLabel="पेशा"
              title={`पेशाको अनुसार घरधुरी वृत्तचित्र (${type})`}
            />
          </ChartCard>
        );
      })}
    </div>
  );
};

export default ChartGrid;
