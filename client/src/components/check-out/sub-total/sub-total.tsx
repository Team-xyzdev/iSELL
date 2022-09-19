import React from "react";
import "./sub-total.scss";
import {createCheckoutPage} from '../../../rapyd-hooks/create-checkout';

interface SubTypes {
  quantity: any;
  shipping: any;
  totalPrice: number;
  ewallet : string,
  items : Array<any>
}
const SubTotal = ({ quantity, shipping, totalPrice, ewallet , items}:SubTypes) => {
   console.log(ewallet)

   const checkoutPage = async () => {
     const CheckOut = await createCheckoutPage( ewallet, totalPrice + shipping , items)
      if(CheckOut) return window.location.href = CheckOut
     console.log(CheckOut, 'checkout')
   }

  return (
    <div className="sub-total">
      <div className="div-1">
        <p className="text-1">Order Summary</p>
        <p className="text-2">
          <span className="span-1">Items ({quantity})</span> ${totalPrice}
        </p>
        <p className="text-2">
          <span className="span-1">Shipping & handling</span> ${shipping}
        </p>
        <p className="text-2">
          <span className="span-1">Order total</span>${totalPrice + shipping}
        </p>
      </div>
      <button onClick={checkoutPage}
       className="sob-btn">Proceed to Payment Page</button>
    </div>
  );
};

export default SubTotal;
