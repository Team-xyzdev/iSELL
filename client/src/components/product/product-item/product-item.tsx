import React from "react";
import "./product-item.scss";

interface Items {
  itemType: string;
  imageUrl: string;
  name: string;
  price: string;
}
const Item = ({ itemType, imageUrl, name, price }: Items) => {

  return (
    <div className="item">
      <div className="div-1">
        <p className="text-1">{itemType}</p>
        <img src={imageUrl} alt="product" className="image" />
      </div>
      <div className="div-2">
        <p className="item-name">{name}</p>
        <p className="item-price">{price}</p>
      </div>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
};

export default Item;
