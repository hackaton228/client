import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Reg from "./auth/reg/reg";

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
