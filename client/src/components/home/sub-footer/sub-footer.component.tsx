import React from "react";
import "./sub-footer.scss";
const SubFooter = () => {
  const woman = require("../../../assets/woman.png");
  const shadow = require("../../../assets/Shadow.png");
  return (
    <div className="sub-footer">
      <div className="mat"></div>
      <div className="backg">
        <img src={shadow} alt="shadow" className="shadow" />
      </div>
      <img className="woman" src={woman} alt="woman" />
      <div className="sub-footer-1">
        <p className="text-1">How it works</p>
        <p className="text-2">
          It's very easy to create a store on iSell. Get started today
        </p>
        <div className="sub-footer-2">
          <div className="sub-footer1">
            <p className="text1">1</p>
            <p className="text11">
              Sign up and create your first online store with ease.
            </p>
          </div>
          <div className="sub-footer2">
            <p className="text2">2</p>
            <p className="text12">
              Add your products to your store and their details.
            </p>
          </div>
          <div className="sub-footer3">
            <p className="text3">3</p>
            <p className="text13">
              Get realtime updates of your customer's activities.
            </p>
          </div>
          <div className="sub-footer4">
            <p className="text4">4</p>
            <p className="text14">
              Sell and earn as much as you can. Grow your business fast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
