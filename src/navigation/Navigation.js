import React from "react";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home/Home";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Router>
  );
};

export default Navigation;