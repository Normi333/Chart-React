import React, { useState } from "react";
import Map from "./Map";
import SideBar from "../utils/SideBar";
import Legend from "../utils/Legend";
import "../styles/App.css";

const MapPage = () => {
  const [selectedLayers, setSelectedLayers] = useState([
    "district",
    "roads",
    "sagarmatha",
    "makalu",
  ]);

  return (
    <div className="gis-container" style={{ display: "flex" }}>
      <SideBar
        selectedLayers={selectedLayers}
        setSelectedLayers={setSelectedLayers}
      />
      <div style={{ flex: 1 }}>
        <Map selectedLayers={selectedLayers} />
      </div>
      <Legend selectedLayers={selectedLayers} />
    </div>
  );
};

export default MapPage;
