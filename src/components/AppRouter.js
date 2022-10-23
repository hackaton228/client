import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CategoryIdPage from "../pages/CategoryIdPage/CategoryIdPage";
import Reg from "./auth/reg/reg";
import { categories } from "../lib/BackendData";
import "../style.scss";

const AppRouter = () => {
  const [cat, setCat] = useState(categories);
  console.log("render")

  return (
    <Routes>
      <Route path="/" element={<HomePage from />} />
      {cat.map((r, id) => { return (
        <Route path={`/category/:${r.id}`} element={<CategoryIdPage from />} key={id} />
      )})
      }
      <Route path="/auth" element={<Reg from />} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  );
};

export default AppRouter;
