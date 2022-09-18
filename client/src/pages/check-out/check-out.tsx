import React from "react";
import CheckOutComponent from "../../components/check-out/check-out.components";
import Navbar from "../../components/home/navbar/navbar.component";

const CheckOut = () => {
  return (
    <>
      <Navbar isActive={true} />
      <CheckOutComponent />
    </>
  );
};

export default CheckOut;
