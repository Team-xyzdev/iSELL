import React from "react";

const StoreItem = () => {
  return (
    <div className="products">
      {/* {products.map((product, i) => (
        <div key={i}>
          <div className="product">
            <p>{product?.stock}</p>
            <img src={product?.imageUrl} />
          </div>
          <div className="product__details">
            <h2>{product?.product}</h2>
            <p>{product?.price}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default StoreItem;
