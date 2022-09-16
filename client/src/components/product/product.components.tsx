import React from "react";
import Navbar from "../home/navbar/navbar.component";
import ProductDisplay from "./product-display/product-display";
import ProductFooter from "./product-footer/product-footer";
import ProductItems from "./product-items/product-items";

const Product = () => {
  return (
    <>
      <Navbar />
      <ProductItems />
      <ProductDisplay />
      <ProductFooter />
    </>
  );
};

export default Product;
