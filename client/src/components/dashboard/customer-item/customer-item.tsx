import React from "react";
import "./customer-item.scss";
interface Customer {
  name: string;
  profile: string;
  email: string;
  contact: string;
  date: string;
  country: string;
}
const CustomerItem = ({ name, profile, email, contact, date, country }: Customer) => {

  return (
    <div className="div-1">
      <div className="customer">
        <img src={profile} alt="profilePic" className="profile" />
        <p>{name}</p>
      </div>
      <div className="email">
        <div>
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.64258 3.33333L6.18768 6.84026C6.57465 7.13884 7.07878 7.13884 7.46575 6.84026L12.0109 3.33333M2.79461 10.6667H10.8588C11.4951 10.6667 12.0109 10.0697 12.0109 9.33333V2.66666C12.0109 1.93028 11.4951 1.33333 10.8588 1.33333H2.79461C2.15836 1.33333 1.64258 1.93028 1.64258 2.66666V9.33333C1.64258 10.0697 2.15836 10.6667 2.79461 10.6667Z"
              stroke="#A1A1AA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p>{email}</p>
      </div>
      <div className="phone">
        <div>
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.64258 2.33333C1.64258 1.59695 2.15836 1 2.79461 1H4.6835C4.93143 1 5.15155 1.18362 5.22996 1.45585L6.09272 4.45147C6.18337 4.76622 6.06026 5.11021 5.80387 5.25858L4.50365 6.011C5.13856 7.64081 6.27304 8.95383 7.68123 9.68866L8.33134 8.18382C8.45954 7.88708 8.75675 7.74459 9.0287 7.84951L11.617 8.84805C11.8522 8.93879 12.0109 9.19355 12.0109 9.48051V11.6667C12.0109 12.403 11.4951 13 10.8588 13H10.2828C5.51094 13 1.64258 8.52285 1.64258 3V2.33333Z"
              stroke="#A1A1AA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p>{contact}</p>
      </div>
      <div className="date">
        <div>
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.74336 3.66667V1M8.35148 3.66667V1M3.16734 6.33333H8.92749M2.01531 13H10.0795C10.7158 13 11.2316 12.403 11.2316 11.6667V3.66667C11.2316 2.93029 10.7158 2.33333 10.0795 2.33333H2.01531C1.37906 2.33333 0.863281 2.93029 0.863281 3.66667V11.6667C0.863281 12.403 1.37906 13 2.01531 13Z"
              stroke="#A1A1AA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p>{date}</p>
      </div>
      <div className="country">
        <p>{country}</p>
        <div className="three-dots">
          <svg
            width="17"
            height="4"
            viewBox="0 0 17 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.42389 2H2.43235M8.34427 2H8.35273M14.2647 2H14.2731M3.26966 2C3.26966 2.55228 2.891 3 2.42389 3C1.95679 3 1.57812 2.55228 1.57812 2C1.57812 1.44772 1.95679 1 2.42389 1C2.891 1 3.26966 1.44772 3.26966 2ZM9.19004 2C9.19004 2.55228 8.81138 3 8.34427 3C7.87717 3 7.4985 2.55228 7.4985 2C7.4985 1.44772 7.87717 1 8.34427 1C8.81138 1 9.19004 1.44772 9.19004 2ZM15.1104 2C15.1104 2.55228 14.7318 3 14.2647 3C13.7975 3 13.4189 2.55228 13.4189 2C13.4189 1.44772 13.7975 1 14.2647 1C14.7318 1 15.1104 1.44772 15.1104 2Z"
              stroke="#A1A1AA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomerItem;
