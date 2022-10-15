import React, {useEffect, useState} from 'react';
import './CategoryId.scss'
import {useParams} from "react-router-dom";

const CategoryId = () => {
  const params = useParams();
  console.log(params)
  
  useEffect(() => {
    (async () => {
    
    })()
  },[]);
  
  return (
    <div className="category-page">
      <div className="category-page__root-component">
        <div className="category-page__filter-block">
          <p className="h1 category-page__filter-block__h1">Filter</p>
          <div className="category-page__filter-block__filters">
            filter
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryId;