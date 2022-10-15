import React from "react";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <a href="">
        <div className="category__button">Акции</div>
      </a>
      <a href="">
        <div className="category__button">Электроника</div>
      </a>
      <a href="">
        <div className="category__button">Компьютеры и сети</div>
      </a>
      <a href="">
        <div className="category__button">Бытовая техника</div>
      </a>
      <a href="">
        <div className="category__button">Стройка и ремонт</div>
      </a>
      <a href="">
        <div className="category__button">Дом и сад</div>
      </a>
      <a href="">
        <div className="category__button">Авто и мото</div>
      </a>
      <a href="">
        <div className="category__button">Красота и спорт</div>
      </a>
      <a href="">
        <div className="category__button">Детям и мамам</div>
      </a>
    </div>
  );
};

export default Categories;
