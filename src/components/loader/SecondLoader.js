import React from 'react';
import "./secondLoader.scss"

const SecondLoader = () => {
  return (
    <div className="s-loader">
      <span style={{animationDelay: ".1s"}}>↓</span>
      <span style={{animationDelay: ".3s"}}>↓</span>
      <span style={{animationDelay: ".4s"}}>↓</span>
      <span style={{animationDelay: ".5s"}}>↓</span>
    </div>
  );
};

export default SecondLoader;