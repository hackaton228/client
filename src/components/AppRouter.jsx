import React from 'react';
import {Routes, Route} from "react-router-dom";
import Reg from "./auth/reg/reg";
import HomePage from "../pages/HomePage/HomePage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth" element={<Reg/>} />
      </Routes>
    </>
  );
};

export default AppRouter;
