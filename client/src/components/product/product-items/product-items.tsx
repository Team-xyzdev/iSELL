import React from "react";
import "./product-items.scss";
const ProductItems = () => {
  // const showBasket = () => {
  //   console.log(cart.basket);
  // };
  const image1 = require("../../../assets/profilep.png");
  return (
    <div className="product-item">
      <div className="product">
        <div className="user-header">
          <img src={image1} alt="profile" />
          <p className="product-title">Ziggy Wears</p>
          <p className="product-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            faucibus massa dignissim tempus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
