// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// relevant firebase imports
import React, { useState } from "react";
import './forgot.scss';
import {UilEnvelope} from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
import { resetPassword } from "../../firebase/firebase.utils";
import { error, closeModal} from "../../store/error-message/error-message.reducer";
import { alert , close} from "../../store/alert/alert.modal.reducer";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
    const dispatch = useDispatch()
 const [email, setEmail] = useState("");
    const isellLogo= require('../../assets/isell-logo.png');
    
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    !email &&  dispatch(error("Enter Email Address"))          
    setTimeout(() => {
        dispatch(closeModal(""))
       }, 2000)
    try {
       await  resetPassword(email)
    
    }
      catch(err :any) {
        if(err.code === 'auth/network-request-failed') {
         dispatch(error("A network error, try again later"))
         setTimeout(() => {
          dispatch(closeModal(""))
         }, 2000)
        } else {
          dispatch(error(`user not found`))
          setTimeout(() => {
            dispatch(closeModal(""))
           }, 2000)
        }
          console.log(err)
      }
         setEmail("")  
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