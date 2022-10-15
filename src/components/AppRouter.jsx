import React from 'react';
import {Routes, Route} from "react-router-dom";
import Reg from "./auth/reg/reg";
import HomePage from "../pages/HomePage/HomePage";
import CategoryId from "../pages/CategoryId/CategoryId";
import {categories} from "../lib/backendData";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      {categories.map((r) => {
        return (
          <Route path={`/category/${r.id}`} element={<CategoryId/>} />
        )
      })}
    </Routes>
  );
};

export default AppRouter;
