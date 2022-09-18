import React from "react";
import { useDispatch } from "react-redux";
import "./product-item.scss";
import { addToCart } from "../../../store/basket/basket";

interface Items {
  id: any;
  itemType: string;
  imageUrl: string;
  name: string;
  price: string;
}
const Item = ({ id, itemType, imageUrl, name, price }: Items) => {
  const dispatch = useDispatch();
  const addToCartt = () => {
    dispatch(
      addToCart({
        id: id,
        title: name,
        image: imageUrl,
        price: price,
        rating: itemType,
      })
    );
    console.log("added");
  };
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
      <button className="buy-btn" onClick={addToCartt}>
        Buy Now
      </button>
    </div>
  );
};

export default Item;
