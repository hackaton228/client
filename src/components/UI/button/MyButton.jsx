import React from 'react';
import './MyButton.scss'

const MyButton = ({children, ...props}) => {
  
  return (
    <button {...props} className={"MyButton"}>
      {children}
    </button>
  );
};

export default MyButton;