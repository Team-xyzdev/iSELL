import React from "react";
import "./hero-section.scss";
const HeroSection = () => {
  const image1 = require("../../../assets/chart1.png");
  const image2 = require("../../../assets/chart12.png");
  const image3 = require("../../../assets/music.png");
  return (
    <div className="hero-section">
      <p className="text-1">What makes us special</p>
      <p className="text-2">Why should you conduct your business on iSell</p>
      <div className="hero-0">
        <div className="hero-1">
          <img src={image3} alt="icon" className="hero-img" />
          <p className="hero-header">Support</p>
          <p className="hero-description">
            We offer 24/7 Support to our Vendors. If you run into any issues
            with payment or customer orders, we’re only a chat away.
          </p>
        </div>
        <div className="hero-2">
          <img src={image2} alt="icon" className="hero-img" />
          <p className="hero-header">Sales</p>
          <p className="hero-description">
            We provides the structure you need for you to grow your business
            sales, making you a more profitable vendor.
          </p>
        </div>
        <div className="hero-3">
          <img src={image1} alt="icon" className="hero-img" />
          <p className="hero-header">Easy Onboarding</p>
          <p className="hero-description">
            It’s very easy to gets started as a vendor on iSELL, Create a free
            account to get started
          </p>
        </div>
      </div>
      <div className="btn-div">
        <button>Become a vendor</button>
      </div>
    </div>
  );
};

export default HeroSection;
