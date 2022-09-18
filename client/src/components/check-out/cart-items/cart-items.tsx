import React from "react";
import "./cart-items.scss";
import { useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../../../store/basket/basket";

interface Items {
  id: any;
  quantity: any;
  itemType: string;
  imageUrl: string;
  name: string;
  price: string;
}
const CartItems = ({ id, itemType, name, price, quantity, imageUrl }) => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeItem(id));
    console.log("removed");
  };
  const increment = () => {
    dispatch(incrementQuantity(id));
  };
  const decrement = () => {
    dispatch(decrementQuantity(id));
  };
  return (
    <div className="cart-items">
      <div className="div-1">
        <img src={imageUrl} alt="cartImage" className="cart-image" />
      </div>
      <div className="div-2">
        <div className="div-21">
          <p className="text-2">{name}</p>
          <div className="div-0">
            <p className="text-3">${price}</p>
            <div className="div-01">
              <button onClick={decrement}>-</button>
              <p> {quantity}</p>
              <button onClick={increment}>+</button>
            </div>
          </div>
        </div>
        <div className="div-22">
          <button onClick={remove}>Remove from cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
