import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { About } from "./Pages/About";
import { Prestation } from "./Pages/Prestation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/prestation" element={<Prestation />} />
      </Routes>
    </Router>
  );
};

export default App;
