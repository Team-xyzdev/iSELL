// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//import relevant modules
import React from "react";
import './dashboard-navbar.scss';


// import logo
const isellLogo : string = require('../../../assets/isell-logo.png');
const person : string = require('../../../assets/person.jpeg');

const DashboardNavbar = () => {
    return (
        <div className="dashboard__navbar">
            <div className="dashboard__sidebar">
             <img className="dashboard__logo" src={isellLogo} alt="isell logo" />
            </div>
            
            <div className="navbar__content">
              <img className="person__logo" src={person} alt="person pfp" />
              <p className="person__p"> Zion Igwe</p>
            </div>
        </div>
           
    );
}

export default DashboardNavbar;