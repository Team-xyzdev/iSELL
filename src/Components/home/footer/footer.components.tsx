import React from "react";
import "./footer.scss";
const Footer = () => {
  const iSELLlogo = require("../../../assets/isell-logo.png");
  return (
    <div className="footer">
      <p className="title">
        Online sales made easy <br></br> with the best tools
      </p>
      <div className="div-1">
        <button>Become a vendor</button>
      </div>
      <div className="div-2">
        <img className="isell" src={iSELLlogo} alt="isell" />
        <p className="isell-text">
          iSELL gives you the building blocks to build a truly profitable
          business.
        </p>
      </div>
      <p className="copyright">
        © Copyright 2022, All Rights Reserved by iSELL
      </p>
    </div>
  );
};

export default Footer;
