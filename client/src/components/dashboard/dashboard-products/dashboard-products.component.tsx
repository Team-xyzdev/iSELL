// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//import relevant modules
import React, { useEffect, useState } from "react";
import './dashboard-products.scss';
import {UilPlus} from '@iconscout/react-unicons';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { db, getProducts } from "../../../firebase/firebase.utils";
import { doc, getDoc } from "firebase/firestore";
import Spinner from "../../spinner/spinner";

//import logo
const uploadImg = require('../../../assets/upload.png');

//JSX Components
const DashboardProducts = () => {
  const getUserUid: any = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);

  const getVendorProducts = async () => {
    setloading(false);
    if(!getUserUid) return
    const getDocRef = doc(db, "users", getUserUid);
    if (!getDocRef) return
    const userSnapshot=  await getDoc(getDocRef);
    if (userSnapshot?.data()?.verification) {
      setProducts(userSnapshot.data()?.products)
      setloading(true);
    }
  
  }

  
  useEffect(() => {
  getVendorProducts()  
  // eslint-disable-next-line
  }, [getUserUid])
    return(
     <div className="dashboard__upload">
       {
         !loading && 
         <Spinner />
       }
      {
        products && loading &&  
        <p> products</p>
      }
      {
        !products && !loading &&
       <div className="dashboard-products">
        <img src={uploadImg} alt="upload icon" />
        <h2> Start by uploading a product</h2>
        <p> Any product you upload on iSELL will live here.</p>
        <p> Start creating your Products.</p>
        <button className="product__button">
                <UilPlus className="uil__plus"/>
                <span> Create A Product</span>
         </button>
      </div> 
      }
  

     </div>
    );
}

export default DashboardProducts;
