// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//import relevant modules
import React from "react";
import './dashboard-products.scss';
import {UilPlus} from '@iconscout/react-unicons';

//import logo
const uploadImg = require('../../../assets/upload.png');

//JSX Components
const DashboardProducts = () => {
    return(
     <div className="dashboard__upload">
  
      <div className="dashboard-products">
        <img src={uploadImg} alt="upload icon" />
        <h2> Start by uploading a product</h2>
        <p> Any product you upload on iSELL will live here.</p>
        <p> Start creating your Products.</p>
        <button className="product__button">
                <UilPlus className="uil__plus"/>
                <span> Create A Product</span>
         </button>
      </div>   

     </div>
    );
}

export default DashboardProducts;
