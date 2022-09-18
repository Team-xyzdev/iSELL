import React from "react";
import "./sub-total.scss";
interface Sub {
  quantity: any;
  shipping: any;
  totalPrice: number;
}
const SubTotal = ({ quantity, shipping, totalPrice }) => {
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
      <button className="sob-btn">Proceed to Payment Page</button>
    </div>
  );
};

export default SubTotal;
