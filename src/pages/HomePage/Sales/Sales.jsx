import React from 'react';
import './Sales.scss'
import MyButton from "../../../components/UI/button/MyButton";

const Sales = () => {
  return (
    <div className="sales">
      <div className="sales-slider">
        <p className="sales-upText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eos necessitatibus nemo neque praesentium recusandae.</p>
        <MyButton>
          Go to store
        </MyButton>
        <p className="sales-downText">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="sales-info">
        <h1 className="h1">sales</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto doloribus, et eveniet hic quibusdam quod repellendus similique voluptatum. Cupiditate earum est in molestias odio suscipit, voluptatem! At beatae consectetur ea harum ipsam perspiciatis porro possimus quam temporibus voluptatum. Dignissimos ipsa, obcaecati. At illo laboriosam, maiores maxime nesciunt repellendus voluptate.</p>
        <p className="sales-downText">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Sales;