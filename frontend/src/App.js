import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CelineSucc } from "./pages/CelineSucc.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/S-WNMHU" element={<CelineSucc />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from "react";

// import "./App.css";
// import { CelineSucc } from "./pages/CelineSucc.js";

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <CelineSucc></CelineSucc>
//       </header>
//     </div>
//   );
// }

// export default App;
