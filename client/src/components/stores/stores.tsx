import React, { useEffect, useState } from "react";
import { getStores } from "../../firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

import "./stores.scss";
import Spinner from "../spinner/spinner";

const StoresComponent = () => {
  const navigate = useNavigate();
  const [productStores, setProductStores]: any = useState([]);
  const [loading, setloading] = useState(false);
  let products: any;
  const stores = async () => {
    setloading(false);
    products = await getStores();
    setProductStores(products);
    setloading(true)
    console.log(products, 'okay');
  };

  const toProductPage = (product: any) => {
    navigate("/product", {
      state: product,
    });
  };
  useEffect(() => {
    stores();
  }, []);

  return (
    <div className="store-com">
      {
        !loading ? <Spinner/> :
        <div>
             <div className="div-1">
        <h2 className="text-1">Stores Owned By vendors on ISELL</h2>
      </div>
      <div className="products">
        
          {productStores.map((product: any, i: any) => (
            <div
              key={i}
              className="store-p"
          
              onClick={() => toProductPage(product)}
            >
              <h2>{product?.businessDetails.business_name}</h2>
              <div className="product">
                <img
                  style={{
                      cursor: "pointer"
                    }}
                  src={product?.businessDetails.business_url}
                  className="store-image"
                />
              </div>
              <div className="product__details">
                <p>{product?.businessDetails.business_type}</p>
              </div>
            </div>
          
          ))}
      
        
      </div>
          </div>
      }
   
    </div>
  );
};

export default StoresComponent;
