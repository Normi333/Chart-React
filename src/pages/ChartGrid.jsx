import React, { useEffect, useState } from "react";
import ChartCard from "../utils/ChartCard";
import GenericChartPreview from "../components/GenericChartPreview";
import "../styles/ChartGrid.css";

const chartTypes = ["bar", "pie", "line", "doughnut"];

const ChartGrid = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setloading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const charts = Array.from({ length: 15 });

  return (
    <div className="chart-grid">
      {charts.map((_, index) => {
        const type = chartTypes[index % chartTypes.length];
        return (
          <ChartCard
            key={index}
            title={`पेशाको अनुसार घरधुरी`}
            loading={loading}
          >
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
