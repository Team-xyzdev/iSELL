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
import React, { useEffect, useState } from "react";
import "./register.css";
import validateInfo from "../../validation/validation";
import { Link } from "react-router-dom";

//google icon imported with ES5
const googleLogo = require('../../assets/google.png');

//JSX Component
const Register = () => {

  // setting initial values of inputs
  const [values, setValues] = useState({
    displayName : "",
    email: "",
    password: "",
    confirm_password : ""
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
    <div className="reg">
      <div className="reg-1">
        <div className="reg-12">
          <div>
            <a className="a-12" href="www.google.com">
              <p>iSELL</p>
            </a>
            <div className="div-12">
              <h2 className="h2-12">
                Welcome to <span> iSELL </span> create an account
              </h2>
            </div>
          </div>
          <div></div>
        </div>
        <div className="reg-13">
          <div></div>
        </div>
      </div>
      <div className="reg-2">
        <div className="reg-21">
          <div>
            <div className="reg-213">
              <Link to="/login" className="a-tag">
                <p>Login</p>
              </Link>

              <div style={{marginBottom: '15px'}}>
                <h1>Create Account</h1>
                <p>Let’s get you started! Create an account to begin</p>
                <form onSubmit={handleSubmit}>
                  <div className="f-1">
                    <div className="f-11">
                      <label>Full Name</label>
                      <div>
                        <input
                          id="fullName"
                          type="text"
                          name="displayName"
                          placeholder="Full Name"
                          value={values.displayName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="f-11">
                      <label>Email Address</label>
                      <div>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="email address"
                          value={values.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="f-12">
                      <label>Password</label>
                      <div>
                        <div className="f-121">
                          <input
                            id="password"
                            type="password"
                            placeholder="******"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="f-12">
                      <label>Confirm Password</label>
                      <div>
                        <div className="f-121">
                          <input
                            id="confirm_password"
                            type="password"
                            placeholder="******"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f-2">
                    <p>
                      By creating an account, you agree to our Terms &
                      Conditions and Privacy Policy
                    </p>
                  </div>
                  <div className="f-3">
                    <button type="submit">
                      <span>Create Account</span>
                    </button>
                  </div>
                  <div className="f-4">
                    <p className="conditionals"> or </p>
                    <button className="login__google" onClick={signUpWithGoogle}>
                    <span className="google__text">SIGN UP WITH GOOGLE </span> 
                    <span className="google__span"> <img className='google__logo' alt='google logo' src={googleLogo} /> </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
