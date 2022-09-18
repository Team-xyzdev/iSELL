// Copyright iSELL 💳 2022
// 17 U.S.C §§ 101-1511

//import relevant modules and file
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import memoize from 'lodash.memoize';
import { useSelector } from "react-redux";
import "./dashboard.scss";

//import sections of the dashboard
import DashboardNavbar from "./dashboard-navbar/dashboard-navbar.component";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "./dashboard-sidebar/dashboard-sidebar.component";
import DashboardProducts from "./dashboard-products/dashboard-products.component";
import DashboardSales from "./dashboard-sales/dashboard-sales.component";
import DashboardCreateProducts from "./dashboard-create-products/dashboard-create.component";
import { Route, Routes } from "react-router-dom";
import { RootState } from "../../store/store";
import { db } from "../../firebase/firebase.utils";
// import DashboardCustomers from "./dashboard-customers/dashboard-customers";

const Dashboard = () => {
  const Navigate = useNavigate()
  const getUserUid: any = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );

const [loading, setLoading] = useState(false);
const [verified, setVerification]= useState(false);
const [details, setDetails]:any = useState([]);

const detailedObject= memoize(async () => {
    setLoading(false);
    if(!getUserUid) return
    const getDocRef = doc(db, "users", getUserUid);
    if (!getDocRef) return 
   const userSnapshot:any =  await getDoc(getDocRef);
    if (userSnapshot?.data()?.verification) {
      setDetails(userSnapshot?.data())
      setVerification(userSnapshot.data()?.verification)
      setLoading(true);
    }
  
  })

  useEffect(() => {
    detailedObject();
    // eslint-disable-next-line
  }, [getUserUid])
  return (
    
    <div className="dashboard">
      <DashboardNavbar {...details} />
      <div className="dashboard__main">
        <DashboardSidebar />
        <Routes>
          <Route path="/" element={ <DashboardProducts/>} />
          <Route path="/sales" element={<DashboardSales />} />
          <Route path='/create' element={<DashboardCreateProducts />} />
          {/* <Route path="/customers" element={<DashboardCustomers />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
