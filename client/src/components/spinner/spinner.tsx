// Copyright iSELL 💳 2022
// 17 U.S.C §§ 101-1511

//importing relevant modules
import React from "react";
import './spinner.scss';

const Spinner = () => {
    return (
      <div className="spinner__overlay">
          <div className="spinner__container"></div>
      </div>
    );
}

export default Spinner;