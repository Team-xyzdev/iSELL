import React from "react";
import CustomerItem from "../customer-item/customer-item";
import "./dashboard-customers.scss";
const DashboardCustomers = () => {
  const profilePic = require("../../../assets/profile.png");
  return (
    <div className="dashboard-customers">
      <div className="head-div">
        <div className="div-1">
          <p className="title">Customers</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipis.
          </p>
        </div>
        <div className="div-2">
          <div className="container-1">
            <p className="svg-export">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.63932 6.66667V10.6667M8.63932 10.6667L6.63932 8.66667M8.63932 10.6667L10.6393 8.66667M11.9727 14H5.30599C4.56961 14 3.97266 13.403 3.97266 12.6667V3.33333C3.97266 2.59695 4.56961 2 5.30599 2H9.02985C9.20666 2 9.37623 2.07024 9.50125 2.19526L13.1107 5.80474C13.2358 5.92976 13.306 6.09933 13.306 6.27614V12.6667C13.306 13.403 12.709 14 11.9727 14Z"
                  stroke="#18181B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <p className="text-export">Export to CSV</p>
          </div>
          <div className="container-2">
            <p className="text-sort">Sort: Popularity</p>
            <p className="svg-sort">
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.72331 1.25L5.63997 5.33333L1.55664 1.25"
                  stroke="#18181B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div className="div-type">
        <div className="customer">
          <p>Customer</p>
        </div>
        <div className="email">
          <p>Email Address</p>
        </div>
        <div className="phone">
          <p>Phone Number</p>
        </div>
        <div className="date">
          <p>Join Date</p>
        </div>
        <div className="country">
          <p>Country</p>
        </div>
      </div>
      <CustomerItem
        country="USA"
        name={`ChukwuEmeka Kingsley`}
        email={`xcity111@gmail.com`}
        profile={profilePic}
        date="November 2021"
        contact={`(201)-329-1283`}
      />
    </div>
  );
};

export default DashboardCustomers;
