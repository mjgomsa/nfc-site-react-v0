import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { CelineSucc } from "./pages/CelineSucc";
import { CelineFail } from "./pages/CelineFail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/S-WNMHU" element={<CelineSucc />} />
        <Route path="/F-WNMHU" element={<CelineFail />} />
      </Routes>
    </Router>
  );
}

export default App;
