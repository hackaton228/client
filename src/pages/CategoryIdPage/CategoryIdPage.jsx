import React, {useEffect, useState} from 'react';
import './CategoryIdPage.scss'
import {useParams} from "react-router-dom";
import Api from "../../Api";

const CategoryIdPage = () => {
  const params = useParams();
  
  const [cut, setCut] = useState([]);
  
  useEffect(() => {
    Api.Store.getOneCategory(parseInt(params[1])).then((response) => {setCut(response.data)})
  }, []);
  
  console.log(cut)
  
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
