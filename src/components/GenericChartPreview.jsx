// GenericChartPreview.jsx
import React, { useState, useEffect, useRef } from "react";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import ChartLegend from "./ChartLegend";
import Skeleton from "./Skeleton";
import "../styles/ChartPreview.css";

// Register needed chart.js modules outside component
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const chartMap = {
  bar: Bar,
  pie: Pie,
  line: Line,
  doughnut: Doughnut,
};

const GenericChartPreview = ({
  type = "bar",
  labelKey = "profession",
  valueKey = "households",
  chartLabel = "पेशा",
  title = "चार्ट",
}) => {
  const [chartData, setChartData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hiddenItems, setHiddenItems] = useState({});
  const chartRef = useRef();

  const ChartComponent = chartMap[type];

  useEffect(() => {
    setTimeout(() => {
      setChartData([
        { profession: "अन्य", households: 100 },
        { profession: "कृषि", households: 5000 },
        { profession: "ज्याला मजदुरी", households: 300 },
        { profession: "व्यापार", households: 250 },
        { profession: "सरकारी सेवा", households: 50 },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const generateColors = (length) =>
    Array.from({ length }, (_, i) => `hsl(${(i * 137.5) % 360}, 65%, 55%)`);

  const colors = generateColors(chartData.length);
  const labels = chartData.map((item) => item[labelKey]);
  const values = chartData.map((item) => parseFloat(item[valueKey]));

  const data = {
    labels,
    datasets: [
      {
        label: chartLabel,
        data: values.map((v, i) => (hiddenItems[i] ? null : v)),
        backgroundColor: colors,
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const toggleVisibility = (index) => {
    setHiddenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    plugins: {
      title: {
        display: true,
        text: title,
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.formattedValue}`,
        },
      },
      legend: { display: false },
    },
    onHover: (_, chartElements) => {
      setHoveredIndex(chartElements.length ? chartElements[0].index : null);
    },
  };

  return (
    <div className="barchart-container" style={{ height: "300px" }}>
      {loading && <Skeleton height={300} />}
      {!loading && (
        <>
          <ChartComponent
            ref={chartRef}
            data={data}
            options={options}
            height={300}
          />
          <ChartLegend
            labels={data.labels}
            colors={colors}
            hoveredIndex={hoveredIndex}
            onClick={toggleVisibility}
            hiddenItems={hiddenItems}
          />
        </>
      )}
    </div>
  );
};

export default GenericChartPreview;
