import React from "react";
import "./buttonAction.scss";

const ButtonAction = ({ text, icon, onClick }) => {
  return (
    <button className="default__button-action" onClick={onClick}>
      <img src={icon} alt="" />
      {text}
    </button>
  );
};

export default ButtonAction;
