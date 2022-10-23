import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import SecondLoader from "../loader/SecondLoader";
import { popularCat } from "../../utils/GetCategories";
import "./popularCategories.scss";

const PopularCategories = () => {
  console.log("render pop component")
  const [popCat, setPopCat] = useState([]);
  const [isLoading, setIsLoading] = useState({cat: true, img: true});
  
  useEffect(() => {
    setTimeout(() => {
      setPopCat(popularCat)
      setIsLoading({...isLoading, cat: false})
    }, 2000)
  }, []);
  
  return (
    <div className="popular-categories">
      <p style={{fontWeight: "700", fontSize: "48px", lineHeight: "65px"}}>Популярные категории</p>
      <div className="popular-categories_box">
        {isLoading.cat ?
          <Loader/>
          :
          popCat.map((c, id) => { return(
            <Link to="/" key={id}>
              <div className="popular-categories_items">
                <div className="popular-categories_img">
                  {isLoading.img ? <SecondLoader/> : <p>404 img not found</p>}
                </div>
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
