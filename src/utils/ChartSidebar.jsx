import React, { useState } from "react";

const ChartSidebar = () => {
  const [openFolder, setOpenFolder] = useState(null);

  const folders = {
    Demographics: ["Population", "Age Distribution"],
    Economy: ["Employment", "Income"],
    Health: ["Facilities", "Disease Rate"],
  };

  return (
    <div className="sidebar">
      <ul className="folder-list">
        {Object.entries(folders).map(([folder, reports]) => (
          <li key={folder}>
            <div
              className="folder-name"
              onClick={() =>
                setOpenFolder(openFolder === folder ? null : folder)
              }
            >
              {folder}
            </div>
            {openFolder === folder && (
              <ul className="report-list">
                {reports.map((report) => (
                  <li key={report} className="report-item">
                    {report}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChartSidebar;
