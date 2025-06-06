// import React from "react";
// import ChartGrid from "./ChartGrid";
// import ChartSidebar from "../utils/ChartSidebar";
// import "../styles/ChartReportPage.css";

// const ChartReportPage = () => {
//   return (
//     <div className="chart-report-container">
//       <div className="chart-sidebar">
//         <ChartSidebar />
//       </div>
//       <div className="chart-content">
//         <ChartGrid />
//       </div>
//     </div>
//   );
// };

// export default ChartReportPage;

import React, { useState } from "react";
import ChartSidebar from "../utils/ChartSidebar";
import reportHtmlData from "../data/reportHtmlData";
import ChartGrid from "../pages/ChartGrid";
import "../styles/ChartReportPage.css";

const ChartReportPage = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleReportSelect = (report) => {
    setSelectedReport(reportHtmlData[report] || "<p>No data available.</p>");
  };

  return (
    <div className="chart-report-container">
      <div className="chart-sidebar">
        <ChartSidebar onReportSelect={handleReportSelect} />
      </div>
      <div className="chart-content">
        {selectedReport ? (
          <div dangerouslySetInnerHTML={{ __html: selectedReport }} />
        ) : (
          <ChartGrid />
        )}
      </div>
    </div>
  );
};

export default ChartReportPage;
