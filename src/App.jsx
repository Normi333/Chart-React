import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChartGrid from "./pages/ChartGrid";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Map from "./pages/Map";
import MapPage from "./pages/MapPage";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<ChartGrid />} />
            {/* <Route path="/map" element={<Map />} /> */}
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
