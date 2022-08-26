import React, { useEffect, useState } from "react";
import "./register.css";
import validateInfo from "../../validation/validation";
import { Link } from "react-router-dom";
const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

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
    <div className="reg">
      <div className="reg-1">
        <div className="reg-12">
          <div>
            <a className="a-12" href="www.google.com">
              <p>Paylancer</p>
            </a>
            <div className="div-12">
              <h2 className="h2-12">
                Welcome to <span> paylancer </span> create an account
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

              <div>
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
                          name="username"
                          placeholder="Full Name"
                          value={values.username}
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