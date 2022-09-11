// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//import relevant modules and file
import React from "react";
import './dashboard.scss';

//import sections of the dashboard
import DashboardNavbar from "./dashboard-navbar/dashboard-navbar.component";
import DashboardSidebar from "./dashboard-sidebar/dashboard-sidebar.component";
import DashboardProducts from "./dashboard-products/dashboard-products.component";
import DashboardSales from "./dashboard-sales/dashboard-sales.component";
import { Route, Routes} from "react-router-dom";


const Dashboard = () => {
    return (
      <div className="dashboard">
        <DashboardNavbar />
        <div className="dashboard__main">
            <DashboardSidebar/>
           <Routes>
             <Route path="/" element={<DashboardProducts/>} />
             <Route path="/sales" element={<DashboardSales/>}/>
            </Routes>
          
     
   
        </div>
        
      </div>
    );
}

export default Dashboard;