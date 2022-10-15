import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Api from "../Api";
import CategoryIdPage from "../pages/CategoryIdPage/CategoryIdPage";
import Reg from "./auth/reg/reg";

const AppRouter = () => {
  const [cat, setCat] = useState([]);
  
  useEffect(() => {
    Api.Store.getAllCategory().then((response) => {setCat(response.data)})
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Home from />} />
      {cat.map((r) => { return (
        <Route path={`/category/:${r.id}`} element={<CategoryIdPage from />} />
      )})
      }
      <Route path="/auth" element={<Reg from />} />
    </Routes>
  );
};

export default AppRouter;
