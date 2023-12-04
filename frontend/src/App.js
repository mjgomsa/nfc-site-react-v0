import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CelineSucc } from "./pages/CelineSucc.js";
import { CelineFail } from "./pages/CelineFail.js";

function App() {
  return (
    <Router basename="/nfc-site-react-v0">
      <Routes>
        <Route path="/S-WNMHU" element={<CelineSucc />} />
        <Route path="/F-WNMHU" element={<CelineFail />} />
      </Routes>
    </Router>
  );
}

export default App;
