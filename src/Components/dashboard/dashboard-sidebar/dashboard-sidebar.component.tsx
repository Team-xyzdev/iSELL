// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//import relevant modules
import React from "react";
import {UilPlus, UilEstate , 
     UilSignalAlt3 , UilUserArrows,
     UilFolder} from '@iconscout/react-unicons';
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
          <div className="sidebarsub__component">
            <div className="home__dashboard">
                <UilEstate className="home__dash"/>
                <p className="dashboard__paragraph">Dashboard</p>
            </div>  
            <div className="analytics__dashboard">
              <p className="analytics">Analytics</p>
              <div className="signals__dashboard">
               <UilSignalAlt3 className="signal"/> 
               <p className="sales">Sales</p>
              </div>      
            </div>
            <div className="support__dashboard">
                <p className="support">Support</p>
               <div className="customers__dashboard">
               <UilUserArrows className="customers"/>
                <p className="customer">Customers</p>
                </div> 
               
            </div>
            <div className="shop__dashboard">
                <p>Shop</p>
                <div>
                 <UilFolder className="products"/>
                 <p>Products</p>
                </div>
            </div>
          </div>
         </div>   
     
        </div>
    );
}

export default DashboardSidebar;