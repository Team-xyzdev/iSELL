// Copyright Paylancers 💳 2022 
// 17 U.S.C §§ 101-1511

// relevant firebase imports
import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from "../../firebase/firebase.utils";

//importing relevant modules
import React, { useEffect, useState } from "react";
import validateInfo from "../../validation/validation2";
import { Link } from "react-router-dom";

//importing styles
import "./login.css";

//importing relevant assets
const googleLogo = require("../../assets/google.png"); 



//JSX login
const Login = () => {

  //sign in with google
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    await createUserDocumentFromAuth(user);
  };

  // values of email and password initial state
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validateInfo(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // if no error is found
      console.log(values);
    }
    // eslint-disable-next-line
  }, [errors]);
  return (
    <div className="log">
      
      <div className="log-1">
        <div className="log-12">
          <div>
            <a className="a-12" href="www.google.com">
              <p>Paylancer</p>
            </a>
            <div className="div-123">
              <h2 className="h2-123">
                Welcome to <span> paylancer </span> create an account
              </h2>
            </div>
          </div>
          <div></div>
        </div>
        <div className="log-13">
          <div></div>
        </div>
      </div>
      <div className="log-2">
        <div className="log-21">
          <div>
            <div className="log-213">
              <Link to="/register" className="a-tag">
                <p>Create an account</p>
              </Link>
              <div>
                <h1>Login to Paylancers</h1>
                <p>Welcome back</p>
                <form onSubmit={handleSubmit}>
                  <div className="f-1">
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
                  </div>
                  <div className="f-2">
                    <p>
                      By creating an account, you agree to our Terms &
                      Conditions and Privacy Policy
                    </p>
                  </div>
                  <div className="f-3">
                    <button type="submit">
                      <span>Login</span>
                    </button>
                  </div>
                  <div className="f-4">
                    <p className="conditionals"> or </p>
                    <button className="login__google" onClick={signInWithGoogle}>
                    <span className="google__text">LOGIN WITH GOOGLE </span> 
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

export default Login;
