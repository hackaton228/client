import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { popularCat } from "../../utils/GetCategories";
import "./popularCategories.scss";

const PopularCategories = () => {
  const [popCat, setPopCat] = useState([]);
  
  useEffect(() => {
    setPopCat(popularCat)
  });
  
  return (
    <div className="popular-categories">
      <p style={{fontWeight: "700", fontSize: "48px", lineHeight: "65px"}}>Популярные категории</p>
      <div className="popular-categories_box">
        {popCat.map((c, id) => { return(
          <Link to="/" key={id}>
            <div className="popular-categories_items">
              <div className="popular-categories_img">IMAGES NOT FOUND</div>
              <p>{c.title}</p>
            </div>
          </Link>
        )})
        }
      </div>
    </div>
  );
};

export default PopularCategories;
