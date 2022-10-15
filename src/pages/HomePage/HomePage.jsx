import React from 'react';
import Category from "./Category/Category";
import './HomePage.scss'
import Sales from "./Sales/Sales";
import Popular from "./Popular/Popular";

const HomePage = () => {
  return (
    <div className="home">
      <Category/>
      <Sales/>
      <Popular/>
    </div>
  );
};

export default HomePage;