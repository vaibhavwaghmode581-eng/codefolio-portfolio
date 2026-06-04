import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import PortfolioPage from "./portfolio/PortfolioPage";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route
          path="/user/:username"
          element={<PortfolioPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;