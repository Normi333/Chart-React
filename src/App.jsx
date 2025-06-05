import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChartGrid from "./utils/ChartGrid";
import NavBar from "./components/NavBar";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<ChartGrid />} />
          {/* <Route path="/map" element={<MapPage />} /> */}
          {/* <Route path="/report" element={<ReportPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
