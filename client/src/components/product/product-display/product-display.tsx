import React from "react";
import Item from "../product-item/product-item";
import "./product-display.scss";

interface Prop {
  products: Array<Object>;
}
const ProductDisplay = ({ products }) => {
  return (
    <div className="display">
      {/* dummy array being mapped */}
      {products.map((item, i) => (
        <Item
          id={i}
          key={i}
          itemType={item.stock}
          name={item.product}
          imageUrl={item.imageUrl}
          price={item.price}
        />
      ))}
      {/* End of mapping */}
    </div>
  );
};

export default ProductDisplay;
