// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//import relevant modules
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../../firebase/firebase.utils";
import './dashboard-navbar.scss';
import memoize from 'lodash.memoize';
import { useSelector } from "react-redux";


// import logo
const isellLogo : string = require('../../../assets/isell-logo.png');
const person : string = require('../../../assets/person.jpeg');

const DashboardNavbar = ({businessDetails, displayName}) => {
  console.log(businessDetails)
    return (
        <div className="dashboard__navbar">
            <div className="dashboard__sidebar">
                {

                }
             <img className="dashboard__logo" src={isellLogo} alt="isell logo" />
            </div>
            
            <div className="navbar__content">
                {
                    businessDetails &&   <img className="person__logo" src={businessDetails?.business_url} alt="person pfp" />
                }
            
              <p className="person__p">{displayName}</p>
            </div>
        </div>
           
    );
}

export default DashboardNavbar;


