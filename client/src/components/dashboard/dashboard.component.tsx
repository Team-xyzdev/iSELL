// Copyright iSELL 💳 2022
// 17 U.S.C §§ 101-1511

//import relevant modules and file
import React from "react";
import "./dashboard.scss";

//import sections of the dashboard
import DashboardNavbar from "./dashboard-navbar/dashboard-navbar.component";
import DashboardSidebar from "./dashboard-sidebar/dashboard-sidebar.component";
import DashboardProducts from "./dashboard-products/dashboard-products.component";
import DashboardSales from "./dashboard-sales/dashboard-sales.component";
import DashboardCreateProducts from "./dashboard-create-products/dashboard-create.component";
import { Route, Routes } from "react-router-dom";
// import DashboardCustomers from "./dashboard-customers/dashboard-customers";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <div className="dashboard__main">
        <DashboardSidebar />
        <Routes>
          <Route path="/" element={<DashboardProducts />} />
          <Route path="/sales" element={<DashboardSales />} />
          <Route path='/create' element={<DashboardCreateProducts />} />
          {/* <Route path="/customers" element={<DashboardCustomers />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
