// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//import relevant firebase module
import {
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  checkverification
} from '../../firebase/firebase.utils';

//importing relevant files and modules
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from "react";
import "./register.scss";
import validateInfo from "../../validation/validation";
import { Link } from "react-router-dom";
import { setCurrentUser } from '../../store/user/user.reducer';
import { UilUser, 
      UilEnvelope,  UilLock, UilEye, UilEyeSlash
  } from '@iconscout/react-unicons'
import { error, closeModal } from '../../store/error-message/error-message.reducer';

//google icon imported with ES5
const googleLogo = require('../../assets/google.png');
const isellLogo = require('../../assets/isell-logo.png');
const signupBg = require('../../assets/asian.png');

//JSX Component
const Register = () => {
  const dispatch = useDispatch();

  // setting initial values of inputs
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirm_password: "",
    loginType : false
  });

  // getting values for each
  const{displayName, email, password, confirm_password} = values;

  // initial states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

    //sign up with google
  const signUpWithGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      const verified = await checkverification(user.uid);
      dispatch(setCurrentUser(user.uid))
      if(verified) {
      return  window.location.pathname = '/'
      }

     return  window.location.pathname = '/setup'
    };

    // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirm_password) {
      dispatch(error("passwords doesn't match"))
      setTimeout(() => {
        dispatch(closeModal(""))
       }, 2000)
      return;
    }

   try {
     // create firebase auth with email and password
    const {user} :any["user"]= await createAuthUserWithEmailAndPassword(
      email,
      password
    );
    dispatch(setCurrentUser(user.uid))
   // create user
   await createUserDocumentFromAuth(user, { displayName });
   // check if verified
   const verified = await checkverification(user.uid);

   if(verified) {
     setValues({
      ...values,
      displayName: "",
      email: "",
      password: "",
      confirm_password: "",
      loginType : false
     })
    return  window.location.pathname = '/'
   }
   setValues({
    ...values,
    displayName: "",
    email: "",
    password: "",
    confirm_password: "",
    loginType : false
   })
   return  window.location.pathname = '/setup'
 }

   catch(err : any) {
    if (err.code === 'auth/email-already-in-use') {
      dispatch(error("email already in use'"))
      setTimeout(() => {
        dispatch(closeModal(""))
       }, 2000)

    }
    if(err.code === 'auth/network-request-failed') {
    dispatch(error("Network error, Try again later"))
    setTimeout(() => {
      dispatch(closeModal(""))
     }, 2000)
    }
    if(err.code === 'auth/invalid-email'){
      dispatch(error("Email is badly formatted"))
    setTimeout(() => {
      dispatch(closeModal(""))
     }, 2000)
    }
    
  
      console.log('user creation encountered an error', err);
  
   }

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  // 
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // if no error is found
      console.log(values, 'values');
    }
    // eslint-disable-next-line
  }, [errors]);

  // JSX building block
  return (
     <div className='register'>
       <div className='register__component1'>
          <img src={isellLogo} alt="isell logo" />
           <div className="form__tag">
             <h2> Welcome to iSELL</h2>
             <form onSubmit={handleSubmit}>
               <div className='full__name'>
                 <UilUser className="user"/>
                 <input 
                 placeholder="Full Name"
                 type='text'
                 value={values.displayName}
                 name='displayName'
                 onChange={handleChange}
                 required />
               </div>
               <div className="email__address"> 
                <UilEnvelope className="envelope"/>
                <input
                  onChange={handleChange} 
                  name="email"
                  type='text' 
                  value={values.email}
                  placeholder="Email address"
                  required />
                </div>
                <div className="password__tag">
                 <UilLock className="password__lock"/>
                 <input 
                  onChange={handleChange}
                  title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number, (min.8 characters)" 
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                  value={values.password}
                  type={values.loginType ? "text" : "password" }
                  name="password"
                  placeholder="Password" 
                  required/>    
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
             <div className="password__tag">
                <UilLock className="password__lock"/>
                <input 
                onChange={handleChange}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                value={values.confirm_password}
                type={values.loginType ? "text" : "password" }
                 name="confirm_password"
                 placeholder="Confirm Password"
                 required />    
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
             <button type="submit">
               Sign Up
             </button>
              
             </form>
             <div className="sign__in__google">
                <p className="conditionals"> or </p>
                <button className="login__google" onClick={signUpWithGoogle}>
                    <span className="google__text">Sign Up with Google</span> 
                    <img className='google__logo' alt='google logo' src={googleLogo} /> 
                </button>
             </div>
             <p className="signup__route">Already have an account? 
             <Link to='/login' 
               style={{
                 outline: "none",
                 textDecoration: "none"
                 }}>
              <span className="signup__link">Sign in now</span> </Link>
            </p>
           </div>
       </div>
       <div className='register__component2'>
        <div className="layer"></div>
       </div>
     </div>
  );
};

export default Register;
