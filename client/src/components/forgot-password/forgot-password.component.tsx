// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// relevant firebase imports
import React, { useState } from "react";
import './forgot.scss';
import {UilEnvelope} from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
import { resetPassword } from "../../firebase/firebase.utils";

const ForgotPassword = () => {
 const [email, setEmail] = useState("");
    const isellLogo= require('../../assets/isell-logo.png');
  const handleSubmit = async (e) => {
    try {
      e.prevenDefault();
       await  resetPassword(email)
       setEmail("")  
    }
      catch(err) {
          console.log(err)
      }
  }

    return (
        <div className="login">
        <div className="login__component1">
         <Link to="/">
          <img src={isellLogo} alt="isell logo" />
      </Link>
           
           <div className="log__body">
             <h2>Reset Password</h2>
             <form onSubmit={handleSubmit}>
               <div className="email__address"> 
                  <UilEnvelope className="envelope"/>
                  <input
                  onChange={(e) => {setEmail(e.target.value)}} 
                  name="email"
                  value={email}
                  type='text' 
                    placeholder="Email address"/>
              </div>
            
               <button type="submit">
                 Reset
               </button>
               
             </form>
         
           </div>
        </div>
        <div className="forgot__component2">
          <div className="forgot__layer"></div>
        </div>
      </div>
    );
}

export default ForgotPassword;