import React from "react";
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Hero from "./components/hero.js";
import Work from "./components/work.js";

function App() {
  return (
    <Router>

    <div className="bg-gray-100 text-gray-900">
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/work" element={<Work/>} />
        
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
