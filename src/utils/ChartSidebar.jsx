// import React, { useState } from "react";

// const ChartSidebar = () => {
//   const [openFolder, setOpenFolder] = useState(null);

//   const folders = {
//     Demographics: ["Population", "Age Distribution"],
//     Economy: ["Employment", "Income"],
//     Health: ["Facilities", "Disease Rate"],
//   };

//   return (
//     <div className="sidebar">
//       <ul className="folder-list">
//         {Object.entries(folders).map(([folder, reports]) => (
//           <li key={folder}>
//             <div
//               className="folder-name"
//               onClick={() =>
//                 setOpenFolder(openFolder === folder ? null : folder)
//               }
//             >
//               {folder}
//             </div>
//             {openFolder === folder && (
//               <ul className="report-list">
//                 {reports.map((report) => (
//                   <li key={report} className="report-item">
//                     {report}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ChartSidebar;

import React, { useState } from "react";
import "../styles/ChartSidebar.css";

const ChartSidebar = ({ onReportSelect }) => {
  const [openFolder, setOpenFolder] = useState(null);

  const folders = {
    Demographics: ["Population", "Age Distribution"],
    Economy: ["Employment", "Income"],
    Health: ["Facilities", "Disease Rate"],
  };

  const toggleFolder = (folder) => {
    setOpenFolder(openFolder === folder ? null : folder);
  };

  return (
    <div className="sidebar">
      <ul className="folder-list">
        {Object.entries(folders).map(([folder, reports]) => (
          <li key={folder} className="folder-item">
            <div className="folder-name" onClick={() => toggleFolder(folder)}>
              {folder}
              <span className="arrow">{openFolder === folder ? "▲" : "▼"}</span>
            </div>
            <ul
              className={`report-list ${openFolder === folder ? "open" : ""}`}
            >
              {reports.map((report) => (
                <li
                  key={report}
                  className="report-item"
                  onClick={() => onReportSelect(report)}
                >
                  {report}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChartSidebar;
