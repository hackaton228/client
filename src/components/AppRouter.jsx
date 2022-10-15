import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CategoryIdPage from "../pages/CategoryIdPage/CategoryIdPage";
import {categories} from "../lib/backendData";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      {categories.map((r) => {
        return (
          <Route path={`/category/:${r.id}`} element={<CategoryIdPage/>} />
        )
      })}
    </Routes>
  );
};

export default AppRouter;
