import React, {useEffect, useState} from 'react';
import './CategoryIdPage.scss'
import {useParams} from "react-router-dom";
import {categories, subCategories} from "../../lib/backendData";

const CategoryIdPage = () => {
  const params = useParams();
  const cat = categories.filter((category) => category.id === parseInt(params['1']))[0]
  const sub_cut_ids = cat.sub_cat_ids
  const sub_cut = subCategories.filter((subCategory) => sub_cut_ids.includes(subCategory.id))
  
  // const sub_cat = filter((category) => category.id === parseInt(params['1']))[0]

  // const sub_cat_data = subCategories.
  // const [subCatData, setSubCatData] = useState([]);
  
  // useEffect(() => {
  //   const response = subCategories
  //   setSubCatData()
  // },[]);
  
  return (
    <div className="category-page">
      <div className="category-page__root-component">
        <div className="category-page__filter-block">
          <p className="h1 category-page__filter-block__h1">Filter</p>
          
          <div className="category-page__filter-block__filters">
            {/*{sub_cut.map((product) => {return(*/}
            {/*  <div>*/}
            {/*    <div>{product.title}</div>*/}
            {/*    */}
            {/*  </div>*/}
            {/*)*/}
            {/*})}*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryIdPage;
