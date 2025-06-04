// import ChartCard from "./components/ChartCard";
// import GenericChartPreview from "./components/GenericChartPreview";
// import "./styles/App.css";
// function App() {
//   return (
//     <>
//       <ChartCard title="पेशाको अनुसार घरधुरी">
//         <GenericChartPreview
//           type="bar"
//           labelKey="profession"
//           valueKey="households"
//           chartLabel="पेशा"
//           chartTitle="पेशाको अनुसार घरधुरी"
//         />
//       </ChartCard>

//       <ChartCard title="पेशाको अनुसार घरधुरी">
//         <GenericChartPreview
//           type="pie"
//           labelKey="profession"
//           valueKey="households"
//           chartLabel="पेशा"
//           chartTitle="पेशाको अनुसार घरधुरी"
//         />
//       </ChartCard>

//       <ChartCard title="पेशाको अनुसार घरधुरी">
//         <GenericChartPreview
//           type="line"
//           labelKey="profession"
//           valueKey="households"
//           chartLabel="पेशा"
//           chartTitle="पेशाको अनुसार घरधुरी"
//         />
//       </ChartCard>
//     </>
//   );
// }
// export default App;

import ChartGrid from "./components/ChartGrid";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <ChartGrid />
    </div>
  );
}

export default App;
