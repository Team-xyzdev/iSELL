import React from "react";
import './home.scss';

const iSELLlogo = require('../../assets/isell-logo.png');

const Home = () => {
    return (
     <div className="homepage">
        <div className="navbar">
          <img src={iSELLlogo} alt="isell logo" />
          <div className="sign_in_and_login">
              <p>Sign in</p>
              <button>Create free account</button>
          </div>
        </div>
     </div>
    )
}

export default Home;