// Copyright iSELL 💳 2022
// 17 U.S.C §§ 101-1511

//import relevant modules and file
import React, { useState, useRef, useEffect } from "react";
import "./dashboard-create.scss";
import {
  UilShoppingBag,
  UilSortAmountDown,
  UilPricetagAlt,
  UilDollarAlt,
  UilImage,
} from "@iconscout/react-unicons";
import {
  storage,
  addProductDetails,
} from "../../../firebase/firebase.utils";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { alert, close } from "../../../store/alert/alert.modal.reducer";
import { error,closeModal } from "../../../store/error-message/error-message.reducer";

const DashboardCreateProducts = () => {


    const dispatch = useDispatch();
 const getUserUid: string | null = useSelector(
        (state: RootState) => state.currentUser.currentUser
      );

const [values, setValues] = useState({
        product: "",
        stock: "default",
        price : "",
        imageLogo : "",
        imageUrl : ""
      });

  // handle onChange 
const handleChange = (e: any) => {

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const uploadImage = async () => {
    try {
      const file = imagePicker.current.files[0];
      // if (!file) return;
      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setValues({
            ...values,
            imageUrl: downloadURL,
          });
        });
      });
    } catch (eror) {
      console.log(eror);
    }
  };

  const imagePicker: React.MutableRefObject<null | any> = useRef(null);
  const { imageLogo } = values;

  const handleSubmit = async (e) => {
  
     e.preventDefault()
     if (!values.imageLogo && !values.imageUrl && !values.price && !values.product) {
        dispatch(error("please fill all inputs"))          
        setTimeout(() => {
            dispatch(closeModal(""))
           }, 2000)
           return
     }

     
    try {
       await uploadImage();
    await addProductDetails(getUserUid, values);  
    dispatch(alert("products added ✅ "))
    setTimeout(() => {
      dispatch(close(""))
    }, 2000)
    }
     catch(error) {

     }
  }

  useEffect(() => {
    uploadImage();
    // eslint-disable-next-line
  }, [imageLogo]);

  // showing images
  const addHeaderImage = async (e: any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent: any) => {
      setValues({
        ...values,
        imageLogo: readerEvent.target.result,
      });
    };
  };

  return (
    <div className="create__products">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="shopping">
          <UilShoppingBag className="shop" />
          <input
            onChange={handleChange}
            name="product"
            value={values.product}
            type="text"
            placeholder="Product Name"
          />
        </div>
        <div className="price__tag">
          <UilPricetagAlt className="price" />
          <input
            onChange={handleChange}
            name="price"
            value={values.price}
            type="number"
            placeholder="Price per item"
          />
          <UilDollarAlt className="dollar" />
        </div>
        <div className="stock__amount">
          <UilSortAmountDown className="amount" />
          <select
            defaultValue={values.stock}
            onChange={handleChange}
            name="stock"
            style={{
              color: values.stock === "default" ? "grey" : "black",
            }}
            required
          >
            <option disabled value="default">
              How many are in stock
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
        </div>

        <div className="sect_img">
          <div className="hd_img">
            {imageLogo ? (
              <img src={imageLogo} alt="item" />
            ) : (
              <UilImage className="image__default" />
            )}
          </div>
          <input
            ref={imagePicker}
            hidden
            onChange={addHeaderImage}
            type="file"
            accept=".jpg, .jpeg, .png"
          />
          <div
            className="upload_add_img"
            onClick={() => imagePicker.current.click()}
          >
            <p className="upload__p">Upload Item</p>
          </div>
        </div>
        
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default DashboardCreateProducts;
