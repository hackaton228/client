import React from 'react';
import './Category.scss'
import MyButton from "../../../components/UI/button/MyButton";

const Category = () => {
  return (
    <div className="category">
      <MyButton>Auto</MyButton>
      <MyButton>PC Technic</MyButton>
      <MyButton>Appliances</MyButton>
    </div>
  );
};

export default Category;