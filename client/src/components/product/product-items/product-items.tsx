import React from "react";
import "./product-items.scss";

interface Props {
  name: string;
  description: string;
  imageUrl: string;
}
const ProductItems = ({ name, description, imageUrl }) => {
  const image1 = require("../../../assets/profilep.png");
  return (
    <div className="product-item">
      <div className="product">
        <div className="user-header">
          <img src={imageUrl} alt="profile" />
          <p className="product-title">{name}</p>
          <p className="product-des">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
