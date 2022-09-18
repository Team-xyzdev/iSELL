import React from "react";
import Navbar from "../../components/home/navbar/navbar.component";
import StoresComponent from "../../components/stores/stores";

const Stores = () => {
  return (
    <>
      <Navbar isActive={true} />
      <StoresComponent />
    </>
  );
};

export default Stores;
