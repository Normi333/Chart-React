import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChartGrid from "./pages/ChartGrid";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ChartReportPage from "./pages/ChartReportPage";
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
            <Route path="/map" element={<MapPage />} />
            <Route path="/report" element={<ChartReportPage />} />
            {/* <Route path="/report" element={<ChartGrid />} /> */}
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
