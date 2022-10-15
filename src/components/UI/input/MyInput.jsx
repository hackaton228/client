import React from 'react';
import './MyInput.scss'

const MyInput = ({...props}) => {
  return (
    <input {...props} className="MyInput"/>
  );
};

export default MyInput;