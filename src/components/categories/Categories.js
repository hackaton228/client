import React, {useEffect, useState} from "react";
import "./Categories.scss";
import Api from "../../Api";
import {Link} from "react-router-dom";

const Categories = () => {
  
  const [cut, setCut] = useState([]);
  
  useEffect(() => {
    Api.Store.getAllCategory().then((response) => {setCut(response.data)})
  }, []);
  
  
  return (
    <div className="categories">
      {cut.map((c) => {
        return (
          <div>
            <Link to={`/category/${c.id}`}>
              <div className="category__button">{c.title}</div>
            </Link>
          </div>
        )
      })}
    </div>
  );
};

export default Categories;
