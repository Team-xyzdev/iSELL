import React from "react";
import Item from "../product-item/product-item";
import "./product-display.scss";
const ProductDisplay = () => {
  // Using this images
  const product1 = require("../../../assets/product1.png");
  const product2 = require("../../../assets/product3.png");
  const product3 = require("../../../assets/product4.png");
  const product4 = require("../../../assets/product5.png");
  // Creating a dummy array to map multiple products
  const product = [
    {
      type: "new",
      imageUrl: product1,
      productName: "Beoplay M5 Bluetooth Speaker",
      price: "$99.00",
    },
    {
      type: "sale",
      imageUrl: product2,
      productName: "Apple Smart Watch 6 - Special Edition",
      price: "$299.00",
    },
    {
      type: "",
      imageUrl: product4,
      productName: "Beylob 90 Speaker",
      price: "$49.00",
    },
    {
      type: "",
      imageUrl: product3,
      productName: "Martino 75 Bluetooth",
      price: "$79.00",
    },
    {
      type: "new",
      imageUrl: product1,
      productName: "Beoplay M5 Bluetooth Speaker",
      price: "$99.00",
    },
    {
      type: "sale",
      imageUrl: product2,
      productName: "Apple Smart Watch 6 - Special Edition",
      price: "$299.00",
    },
    {
      type: "",
      imageUrl: product4,
      productName: "Beylob 90 Speaker",
      price: "$49.00",
    },
    {
      type: "",
      imageUrl: product3,
      productName: "Martino 75 Bluetooth",
      price: "$79.00",
    },
    {
      type: "new",
      imageUrl: product1,
      productName: "Beoplay M5 Bluetooth Speaker",
      price: "$99.00",
    },
    {
      type: "sale",
      imageUrl: product2,
      productName: "Apple Smart Watch 6 - Special Edition",
      price: "$299.00",
    },
    {
      type: "",
      imageUrl: product4,
      productName: "Beylob 90 Speaker",
      price: "$49.00",
    },
    {
      type: "",
      imageUrl: product3,
      productName: "Martino 75 Bluetooth",
      price: "$79.00",
    },
    {
      type: "new",
      imageUrl: product1,
      productName: "Beoplay M5 Bluetooth Speaker",
      price: "$99.00",
    },
    {
      type: "sale",
      imageUrl: product2,
      productName: "Apple Smart Watch 6 - Special Edition",
      price: "$299.00",
    },
    {
      type: "",
      imageUrl: product4,
      productName: "Beylob 90 Speaker",
      price: "$49.00",
    },
    {
      type: "",
      imageUrl: product3,
      productName: "Martino 75 Bluetooth",
      price: "$79.00",
    },
  ];
  return (
    <div className="display">
      {/* dummy array being mapped */}
      {product.map((item, i) => (
        <Item
          id={i}
          key={i}
          itemType={item.type}
          name={item.productName}
          imageUrl={item.imageUrl}
          price={item.price}
        />
      ))}
      {/* End of mapping */}
    </div>
  );
};

export default ProductDisplay;
