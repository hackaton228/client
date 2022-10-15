import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Api from "../Api";
import CategoryIdPage from "../pages/CategoryIdPage/CategoryIdPage";

const AppRouter = () => {
  const [cut, setCut] = useState([]);
  
  useEffect(() => {
    Api.Store.getAllCategory().then((response) => {setCut(response.data)})
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Home from />} />
      {cut.map((r) => { return (
        <Route path={`/category/:${r.id}`} element={<CategoryIdPage from />} />
      )})
      }
    </Routes>
  );
};

export default AppRouter;
