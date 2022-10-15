import React from 'react';
import './HomePage.scss'
import Category from "./Category/Category";
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