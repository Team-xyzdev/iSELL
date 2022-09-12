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
      UilEnvelope,  UilLock, UilEye
  } from '@iconscout/react-unicons'

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
    confirm_password: ""
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
      alert('passwords do not match');
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
    return  window.location.pathname = '/'
   }
   return  window.location.pathname = '/setup'
 }

   catch(error : any) {
    if (error.code === 'auth/email-already-in-use') {
      alert('Cannot create user, email already in use');
    } else {
      console.log('user creation encountered an error', error);
    }
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
                 onChange={handleChange} />
               </div>
               <div className="email__address"> 
                <UilEnvelope className="envelope"/>
                <input
                  onChange={handleChange} 
                  name="email"
                  type='text' 
                  value={values.email}
                  placeholder="Email address"/>
                </div>
                <div className="password__tag">
                 <UilLock className="password__lock"/>
                 <input 
                  onChange={handleChange}
                  value={values.password}
                  type='password'
                  name="password"
                  placeholder="Password" />    
                <UilEye className="show__hide" />
             </div>
             <div className="password__tag">
                <UilLock className="password__lock"/>
                <input 
                onChange={handleChange}
                value={values.confirm_password}
                 type='password'
                 name="confirm_password"
                 placeholder="Confirm Password" />    
                <UilEye className="show__hide" />
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
