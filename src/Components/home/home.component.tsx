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

        <div className="splash">
            <div className="component__one">
              <p className="wave__component"> Hello there <span className="wave">👋🏽</span>, Welcome to isell</p>
              <h2> The easiest way to sell and earn online</h2>
              <p style={{
                  marginTop: '1px'
              }}> iSELL leverages on the world’s fastest and most secure payment portal to give you the best seling experience you can get.</p>
              <button> Become a Vendor</button>
              <div className="sponsor">
                  <p> </p>
                  <img />
              </div>
            </div>
            <div className="component__two">

            </div>
        </div>
     </div>
    )
}

export default Home;