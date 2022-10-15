import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home from />} />
    </Routes>
  );
};

export default AppRouter;
