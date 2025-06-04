// import React, { useState, useEffect } from "react";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   BarElement,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
//   Title,
// } from "chart.js";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import ChartLegend from "./ChartLegend";
// import Skeleton from "./Skeleton";
// import "../styles/ChartPreview.css";

// // Register all necessary Chart.js components
// ChartJS.register(
//   ArcElement,
//   BarElement,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
//   Title
// );

// const chartMap = {
//   bar: Bar,
//   pie: Pie,
//   line: Line,
// };

// const staticNepaliData = [
//   { profession: "अन्य", households: 100 },
//   { profession: "कृषि", households: 5000 },
//   { profession: "ज्याला मजदुरी", households: 300 },
//   { profession: "व्यापार", households: 250 },
//   { profession: "सरकारी सेवा", households: 50 },
// ];

// const GenericChartPreview = ({
//   type = "bar",
//   labelKey = "profession",
//   valueKey = "households",
//   chartLabel = "पेशा",
//   chartTitle = "पेशाको अनुसार घरधुरी वितरण",
//   dataSource = staticNepaliData,
//   isExpanded = false,
// }) => {
//   const [chartData, setChartData] = useState([]);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading (replace with API logic)
//     setTimeout(() => {
//       setChartData(dataSource);
//       setLoading(false);
//     }, 1000);
//   }, [dataSource]);

//   const generateColors = (length) =>
//     Array.from({ length }, (_, i) => {
//       const hue = (i * 137.508) % 360;
//       return `hsl(${hue}, 65%, 55%)`;
//     });

//   const colors = generateColors(chartData.length);
//   const ChartComponent = chartMap[type];

//   const data = {
//     labels: chartData.map((item) => item[labelKey]),
//     datasets: [
//       {
//         label: chartLabel,
//         data: chartData.map((item) => parseFloat(item[valueKey])),
//         backgroundColor: type === "pie" ? colors : colors,
//         borderColor: type === "pie" ? "#fff" : colors,
//         borderWidth: type === "pie" ? 2 : 1,
//         fill: type === "line",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       title: {
//         display: true,
//         text: chartTitle,
//         font: { size: 18 },
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => `${context.label}: ${context.formattedValue}`,
//         },
//       },
//       legend: {
//         display: false,
//       },
//     },
//     onHover: (event, chartElements) => {
//       if (chartElements.length > 0) {
//         setHoveredIndex(chartElements[0].index);
//       } else {
//         setHoveredIndex(null);
//       }
//     },
//     ...(type === "bar" || type === "line"
//       ? {
//           scales: {
//             y: {
//               beginAtZero: true,
//               ticks: { font: { size: 14 } },
//             },
//             x: {
//               ticks: { font: { size: 14 } },
//             },
//           },
//         }
//       : {}),
//   };

//   return (
//     <div className="barchart-container">
//       {loading ? (
//         <Skeleton height={400} />
//       ) : (
//         <>
//           {ChartComponent && (
//             <ChartComponent data={data} options={options} height={400} />
//           )}
//           {isExpanded && chartData.length > 0 && (
//             <ChartLegend
//               labels={data.labels}
//               colors={colors}
//               hoveredIndex={hoveredIndex}
//             />
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default GenericChartPreview;

// GenericChartPreview.jsx
import React, { useState, useEffect } from "react";
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
        data: values,
        backgroundColor: colors,
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
    <div className="barchart-container">
      {loading && <Skeleton height={400} />}
      {!loading && (
        <>
          <ChartComponent data={data} options={options} height={400} />
          <ChartLegend
            labels={labels}
            colors={colors}
            hoveredIndex={hoveredIndex}
          />
        </>
      )}
    </div>
  );
};

export default GenericChartPreview;
