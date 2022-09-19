// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// relevant firebase imports
import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  checkverification,
  signInAuthUserWithEmailAndPassword
} from "../../firebase/firebase.utils";

//importing relevant modules

import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import validateInfo from "../../validation/validation2";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../../store/user/user.reducer";
import { UilEnvelope,
    UilLock , UilEye, UilEyeSlash } from '@iconscout/react-unicons'
import { error ,closeModal} from "../../store/error-message/error-message.reducer";

//importing styles
import "./login.scss";


//importing relevant assets
const googleLogo = require("../../assets/google.png"); 
const backgroundImage  = require('../../assets/young-picture.png');
const isellLogo = require('../../assets/isell-logo.png');



//JSX login
const Login = () => {
   const dispatch = useDispatch()

  //sign in with google
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    const verified = await checkverification(user.uid);
    dispatch(setCurrentUser(user.uid))
    if(verified) {
    
    return  window.location.pathname = '/dashboard'
    }
   return  window.location.pathname = '/setup'
  };

  // values of email and password initial state
  const [values, setValues] = useState({
    email: "",
    password: "",
    loginType : false
  });

  // getting the values 
  const {email, password} = values
;
  // set initial error state and if there is submission
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // handle onChange 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // handle on submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true);
  try {
    const {user} :any["user"] = await signInAuthUserWithEmailAndPassword(
      email,
      password
    );
    if(!user) return
    const verified = await checkverification(user.uid);
    setCurrentUser(user.uid);

    if(verified) {
    return  window.location.pathname = '/dashboard'
    }
   return  window.location.pathname = '/setup'

  }
  catch(err : any) {
    switch (err.code) {
      case 'auth/wrong-password':
        dispatch(error('incorrect password for email'));
        setTimeout(() => {
          dispatch(closeModal(""))
         }, 2000);
        break;
      case 'auth/user-not-found':
        dispatch(error('no user associated with this email'));
        setTimeout(() => {
          dispatch(closeModal(""))
         }, 2000);
        break;
      case "auth/network-request-failed" :
        dispatch(error('network error, try again later'));
        setTimeout(() => {
          dispatch(closeModal(""))
         }, 2000);
         break;
      case "auth/too-many-requests" :
          dispatch(error('too many requests, try again later'));
          setTimeout(() => {
            dispatch(closeModal(""))
           }, 2000);
           break;
      default:
        console.log(err);
    }
  }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // if no error is found
      console.log(values);
    }
    // eslint-disable-next-line
  }, [errors]);
  return (
    <div className="login">
      <div className="login__component1">
         <img src={isellLogo} alt="isell logo" />
         <div className="log__body">
           <h2> Welcome back to iSELL</h2>
           <form onSubmit={handleSubmit}>
             <div className="email__address"> 
                <UilEnvelope className="envelope"/>
                <input
                onChange={handleChange} 
                name="email"
                value={values.email}
                type='text' 
                  placeholder="Email address"/>
                </div>
              <div className="password__tag">
                <UilLock className="password__lock"/>
                <input 
                onChange={handleChange}
                 type={!values.loginType ? "password" : "text"}
                 value={values.password}
                 name="password"
                 placeholder="Password" />  
                 {
                   values.loginType ? 
                   <UilEye className="show__hide" onClick={(e) => {  setValues({
                                                                            ...values,
                                                                            loginType: !values.loginType,
                                                                          })}} />
                                                         : 
                   <UilEyeSlash  className="show__hide" onClick={(e) => {  setValues({
                    ...values,
                    loginType: !values.loginType,
                  })}} />                                                     
                 }  
               
             </div>
             <div className="forgot__password">
               <div className="remember__me">
                <input type="checkbox" />
                <p>Remember me</p>
               </div>
              <Link to='/reset'>
               <p>Forgot Password?</p>
              </Link>
             
             </div>
             <button type="submit">
               Sign In
             </button>
             
           </form>
           <div className="sign__in__google" onClick={signInWithGoogle}>
                <p className="conditionals"> or </p>
                <button className="login__google">
                    <span className="google__text">Sign In with Google</span> 
                    <img className='google__logo' alt='google logo' src={googleLogo} /> 
                </button>
                  </div>
          <p className="signup__route">Don't have an account? 
             <Link to='/register' 
               style={{
                 outline: "none",
                 textDecoration: "none"
                 }}>
              <span className="signup__link">Sign up now</span> </Link>
            </p>
         </div>
      </div>
      <div className="login__component2">
        <div className="layer"></div>
      </div>
    </div>
  );
};

export default Login;
