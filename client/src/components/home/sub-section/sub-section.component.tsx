import React from "react";
import "./sub-section.scss";

const SubSection = () => {
  const profile = require("../../../assets/profile.png");
  const man = require("../../../assets/man.png");
  const vector1 = require("../../../assets/vector1.png");
  const vector2 = require("../../../assets/vector2.png");
  return (
    <div className="sub-section">
      <div className="left-div">
        <img src={man} alt="man" />
        <div className="details">
          <div className="first-details">
            <img className="profile-img" src={profile} alt="profile" />
            <div className="text-2">
              <p className="manager-text">Product Manager</p>
              <p>Albert Flores</p>
            </div>
          </div>
          <hr />
          <p className="id">Customer ID</p>
          <p className="id">Last Active</p>
          <p className="id">Provided task</p>
        </div>
      </div>
      <div className="right-div">
        <p className="text-1">Improve your sales</p>
        <div className="description">
          <p>
            Online sales made <br /> easy with better tools.
          </p>
          <p></p>
        </div>
        <div className="features">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Get unlimited products uploads. Level up your sales.</p>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Collect payments manage your customers and many more.</p>
          </div>
        </div>
        <button>Become a vendor</button>
      </div>
      <img src={vector1} alt="vector1" className="vector1" />
      <img src={vector2} alt="vector2" className="vector2" />
    </div>
  );
};

export default SubSection;
