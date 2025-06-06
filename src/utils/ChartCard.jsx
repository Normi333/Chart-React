import React, { useState, useEffect } from "react";
import { FaExpandAlt, FaCompressAlt } from "react-icons/fa";
import "../styles/ChartCard.css";
import Skeleton from "./Skeleton";

const ChartCard = ({ title, children, loading = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isExpanded]);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <>
      {isExpanded && (
        <div className="chart-card-backdrop" onClick={toggleExpand} />
      )}
      <div className={`chart-card ${isExpanded ? "expanded" : "minimized"}`}>
        <div className="chart-card-header">
          {loading ? (
            <Skeleton width="{120} height={20}" />
          ) : (
            <>
              <h3>{title}</h3>
              <div className="chart-card-actions" onClick={toggleExpand}>
                {isExpanded ? (
                  <FaCompressAlt title="Minimize" />
                ) : (
                  <FaExpandAlt title="Maximize" />
                )}
              </div>
            </>
          )}
        </div>
        <div className="chart-card-body">
          {loading ? (
            <Skeleton height={200} />
          ) : (
            React.Children.map(children, (child) =>
              React.cloneElement(child, { isExpanded })
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ChartCard;
