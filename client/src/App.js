import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import PortfolioPage from "./portfolio/PortfolioPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:username" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;