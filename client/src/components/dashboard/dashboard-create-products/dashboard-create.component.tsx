// Copyright iSELL 💳 2022
// 17 U.S.C §§ 101-1511

//import relevant modules and file
import React, {useState} from "react";
import './dashboard-create.scss';
import { UilShoppingBag, UilSortAmountDown, UilPricetagAlt, UilDollarAlt } from '@iconscout/react-unicons'


const DashboardCreateProducts = () => {

const [values, setValues] = useState({
        product: "",
        stock: "default",
        url : "",
        price : ""
      });

  // handle onChange 
const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
    
    return (
       <div className="create__products">
           <h2>Add Product</h2>
           <form >
             <div className="shopping"> 
                <UilShoppingBag className="shop"/>
                <input
                onChange={handleChange} 
                name="product"
                value={values.product}
                type='text' 
                  placeholder="Product Name"/>
                </div>
              <div className="price__tag">
                <UilPricetagAlt className="price"/>
                <input 
                  onChange={handleChange} 
                  name="price"
                  value={values.price}
                  type='number' 
                  placeholder="Price per item"/>
                <UilDollarAlt className="dollar" />
              </div>
              <div className="stock__amount">
                <UilSortAmountDown className="amount"/>
                <select 
                defaultValue={values.stock} 
                onChange={handleChange} 
                name="stock"
                style={{
                  color: values.stock==="default" ? "grey" : "black"
                }}
                required>
                 <option disabled value="default" >How many are in stock</option>
                   <option value='1' >1</option>
                   <option value='2' >2</option>
                   <option value='3' >3</option>
                   <option value='4' >4</option>
                   <option value='5' >5</option>
                   <option value='6' >6</option>
                   <option value='7' >7</option>
                   <option value='8' >8</option>
                   <option value='9' >9</option>
                   <option value='10'>10</option>    
                   <option value='11'>11</option> 
                   <option value='12'>12</option> 
                   <option value='13'>13</option> 
                   <option value='14'>14</option> 
                   <option value='15'>15</option> 
                   <option value='16'>16</option> 
                   <option value='17'>17</option> 
                   <option value='18'>18</option> 
                   <option value='19'>19</option> 
                   <option value='20'>20</option> 
               </select>  
             
             </div>
         
             <button type="submit">
               Add Item
             </button>
             
           </form>
       </div>
    );
}

export default DashboardCreateProducts;
