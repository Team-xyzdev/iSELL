import React, { useEffect, useState } from "react";
import CartItems from "./cart-items/cart-items";
import "./check-out.scss";
import SubTotal from "./sub-total/sub-total";
import { useSelector } from "react-redux";
import { getTotalBasketPrice } from "../../store/basket/basket";

const CheckOutComponent = () => {
  // basketTotal
  const cart = useSelector((state: any) => state.basket);
  const basketItems = cart.basket;

  return (
    <div className="check-out">
      <div className="left-div">
        <p className="showCart">Showing Cart Items</p>
        <div className="div-1">
          <p>Hello, Xcity</p>
        </div>
        <div className="cart">
          {basketItems.map((item) => (
            <CartItems
              id={item.id}
              key={item.id}
              imageUrl={item.image}
              price={item.price}
              quantity={item.quantity}
              itemType={item.rating}
              name={item.title}
            />
          ))}
        </div>
      </div>
      <div className="right-div">
        <SubTotal
          quantity={basketItems?.length}
          shipping={8}
          totalPrice={getTotalBasketPrice(basketItems)}
        />
      </div>
    </div>
  );
};

export default CheckOutComponent;
