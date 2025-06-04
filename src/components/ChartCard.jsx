import React, { useState } from "react";
import { FaExpandAlt, FaCompressAlt } from "react-icons/fa";
import "../styles/ChartCard.css";

const ChartCard = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className={`chart-card ${isExpanded ? "expanded" : "minimized"}`}>
      <div className="chart-card-header">
        <h3>{title}</h3>
        <div className="chart-card-actions" onClick={toggleExpand}>
          {isExpanded ? (
            <FaCompressAlt title="Minimize" />
          ) : (
            <FaExpandAlt title="Maximize" />
          )}
        </div>
      </div>
      <div className="chart-card-body">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { isExpanded })
        )}
      </div>
    </div>
  );
};

export default ChartCard;
