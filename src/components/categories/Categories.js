import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../lib/BackendData";
import "./categories.scss";

const Categories = () => {
  const [cat, setCut] = useState(categories);
  
  console.log("RENDER Categories")
  
  // useEffect(() => {
  //   Api.Store.getAllCategory().then((response) => {setCut(response.data)})
  // }, []);
  
  return (
    <div className="categories">
      {cat.map((c, id) => { return (
          <Link to={`/category/${c.id}`} key={id}>
            <div className="category__button">{c.title}</div>
          </Link>
        )})
      }
    </div>
  );
};

export default Categories;
