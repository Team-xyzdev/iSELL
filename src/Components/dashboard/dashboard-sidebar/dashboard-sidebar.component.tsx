// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//import relevant modules
import React from "react";
import {UilPlus, UilEstate} from '@iconscout/react-unicons';
import './dashboard-sidebar.scss';

//JSX Component
const DashboardSidebar = () => {
    return (
        <div className="sidebar">
         <div className="sidebar__component1">
          <button className="product__button">
            <UilPlus className="uil__plus"/>
            <span> Create A Product</span>
          </button>
         </div>   
     
        </div>
    );
}

export default DashboardSidebar;