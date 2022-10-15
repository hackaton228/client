import React from 'react';
import './Category.scss'
import MyButton from "../../../components/UI/button/MyButton";
import {Link} from "react-router-dom";
import {categories} from "../../../lib/backendData";

const Category = () => {
  
  return (
    <div className="category">
      {categories.map((c) => {
        return (
        <Link to={`/category/${c.id}`}>
          <MyButton>
            {c.title}
          </MyButton>
        </Link>
        )})
      }
    </div>
  );
};

export default Category;
