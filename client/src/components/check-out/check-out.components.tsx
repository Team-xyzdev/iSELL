import React, { useEffect, useState } from "react";
import CartItems from "./cart-items/cart-items";
import "./check-out.scss";
import SubTotal from "./sub-total/sub-total";
import { useSelector } from "react-redux";
import { getTotalBasketPrice } from "../../store/basket/basket";
import { useLocation } from "react-router-dom";

const CheckOutComponent = () => {
  // basketTotal
  const cart :any = useSelector((state: any) => state.basket);
  const basketItems:any = cart.basket;
  const {state}:any = useLocation()
  console.log(state);

  return (
    <div>
    {
      basketItems.length>0 ?
   <div className="check-out">
      <div className="left-div">
        <p className="showCart">Showing Cart Items</p>
        <div className="div-1">
          <p>Proceed and Checkout</p>
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
          items={basketItems}
          ewallet={state?.businessDetails?.business_wallet}
          quantity={basketItems?.length}
          shipping={8}
          totalPrice={getTotalBasketPrice(basketItems)}
        />
      </div>
    </div>  :
     window.location.pathname="/stores"
     }
   
    </div>
  );
};

export default CheckOutComponent;
