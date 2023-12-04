import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { CelineSucc } from "./pages/CelineSucc";
import { CelineFail } from "./pages/CelineFail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/frontend" element={<Home />} />
        <Route path="/frontend/S-WNMHU" element={<CelineSucc />} />
        <Route path="/frontend/F-WNMHU" element={<CelineFail />} />
      </Routes>
    </Router>
  );
}

export default App;
