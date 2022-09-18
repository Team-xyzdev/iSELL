// Copyright iSELL 💳 2022
// 17 U.S.C §§ 101-1511

//importing relevant files and modules
import React from "react";
// import styles
import "./navbar.scss";
import { useSelector } from "react-redux";
// import logo
const cartImage = require("../../../assets/Shape.png");
const iSELLlogo = require("../../../assets/isell-logo.png");

interface Active {
  isActive: boolean;
}
// JSX component
const Navbar = ({ isActive }) => {
  const cart = useSelector((state: any) => state.basket);
  return (
    <div className="navbar">
      <img src={iSELLlogo} alt="isell logo" />
      <div className="sign_in_and_login">
        <p>Sign in</p>
        <button className="navbar-btn">Create free account</button>
        <div className={isActive ? `navbar-cart` : `navbar-nocart`}>
          <img className="cart" src={cartImage} alt="cart" />
          <p className="count">{cart.basket?.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
