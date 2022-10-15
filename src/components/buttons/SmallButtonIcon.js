import React from "react";
import "./SmallButtonIcon.scss";

const SmallButtonIcon = ({ text, icon, onClick, onMouseOver }) => {
  return (
    <button
      className="default__button-icon"
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      <img src={icon} alt="" />
      {text}
    </button>
  );
};

export default SmallButtonIcon;
