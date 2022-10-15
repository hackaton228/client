import React from "react";
import "./CategoriesButton.scss";

const CategoriesButton = ({ text, icon, onClick, style }) => {
  return (
    <button
      className="default__button-categories"
      onClick={onClick}
      style={style}
    >
      <img src={icon} alt="" />
      {text}
    </button>
  );
};

export default CategoriesButton;
