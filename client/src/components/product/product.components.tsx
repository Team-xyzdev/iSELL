import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../home/navbar/navbar.component";
import ProductDisplay from "./product-display/product-display";
import ProductFooter from "./product-footer/product-footer";
import ProductItems from "./product-items/product-items";

const Product = () => {
  const { state }: any = useLocation();
  const hii = () => {
    console.log(state);
  };
  return (
    <>
      <Navbar isActive={true} />
      <ProductItems
        imageUrl={state?.businessDetails.business_url}
        name={state?.businessDetails.business_name}
        description={state?.businessDetails.business_description}
      />
      <ProductDisplay products={state.products} />
      <ProductFooter />
    </>
  );
};

export default Product;
