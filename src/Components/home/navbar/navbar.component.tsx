// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//importing relevant files and modules
import React from "react";
// import styles
import './navbar.scss'
// import logo
const iSELLlogo = require('../../../assets/isell-logo.png');

// JSX component
const Navbar = () => {
    return (
        <div className="navbar">
        <img src={iSELLlogo} alt="isell logo" />
        <div className="sign_in_and_login">
            <p>Sign in</p>
            <button>Create free account</button>
        </div>
      </div>
    )
}

export default Navbar;

 
