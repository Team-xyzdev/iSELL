// Copyright iSELL 💳 2022
// 17 U.S.C §§ 101-1511

//importing relevant files and modules
import React from "react";
// import styles
import "./navbar.scss";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// import logo
const cartImage = require("../../../assets/Shape.png");
const iSELLlogo = require("../../../assets/isell-logo.png");
const shoppingLogo = require("../../../assets/shopping-cart.png")

interface Active {
  isActive: boolean;
}
// JSX component
const Navbar = (props) => {
  const cart = useSelector((state: any) => state.basket);
  const Navigate = useNavigate();
  console.log(props.state, 'props')

  const  getVendorWallet = () => {
    Navigate('/checkout', {state: props.state})
  }

  return (
    <div className="navbar">
     <Link to='/' style={{
         cursor: 'pointer'
     }}>
       <img src={iSELLlogo} alt="isell logo" />
      </Link>   
      
      <div className="sign_in_and_login">
        <Link to='/login'>
         <p>Sign in</p>
        </Link>
        <Link to='/register'>
         <button className="navbar-btn">Create free account</button>
        </Link>
  
        <div className={props.isActive ? `navbar-cart` : `navbar-nocart`} onClick={getVendorWallet}>
          <img className="cart" src={shoppingLogo} alt="cart" />
          <p className="count">{cart.basket?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
