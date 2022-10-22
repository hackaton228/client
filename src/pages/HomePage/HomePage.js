import React from "react";
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import Banner from "../../components/banner/Banner";
import PopularCategories from "../../components/popularCategories/PopularCategories";
import Footer from "../../components/footer/Footer";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <Header/>
      <Categories/>
      <Banner/>
      <PopularCategories/>
      <Footer/>
    </div>
  );
};

export default HomePage;
