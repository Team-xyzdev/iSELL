// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//importing relevant files and modules
import React from "react";

// styles
import './splash-section.scss'

// import logos
const rapydLogo = require('../../../assets/rapyd-logo.png')
const product1 = require('../../../assets/product-1.png');
// const product2 = require('../../assets/product2.png');
const cartLogo = require('../../../assets/Shape.png');
const coilLogo = require('../../../assets/coil.png');
const youngAAIMG = require('../../../assets/young-picture.png');

//JSX component;
const SplashSection = () => {
    return (
        <div className="splash">
        <div className="component__one">
          <p className="wave__component"> Hello there <span className="wave">👋🏽</span>, Welcome to isell</p>
          <h2> The easiest way to sell and earn online</h2>
          <p style={{
              marginTop: '1px'
          }}> iSELL leverages on the world’s fastest and most secure payment portal to give you the best seling experience you can get.</p>
          <button> Become a Vendor</button>
          <div className="sponsor">
              <p> Secure Payment by</p>
              <img src={rapydLogo} alt='rapyd logo'/>
          </div>
        </div>
        <div className="component__two">
          <img className="coil" src={coilLogo} alt="coil logo" />
          <img className="AA" src={youngAAIMG} alt="young AA"/>
        <div className="products">
          <div className="product-1">
            <img src={product1} alt="product-1" />
             <div className="product__subsection"> 
              <img className="" src={cartLogo} alt="cart logo"/>
              <button>Buy Now <i className="uil uil-angle-right"></i></button>
             </div>
          </div>
          <div className="product-2">

          </div>
          </div>
        </div>
    </div>
    );
}
      
export default SplashSection;