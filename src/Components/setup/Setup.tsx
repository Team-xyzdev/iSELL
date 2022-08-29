import React from "react";
import "./setup.css";
import { Link } from "react-router-dom";

const Setup = () => {
  return (
    <div className="set">
      <div className="set-1">
        <div className="set-12">
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
        <div className="set-13">
          <div></div>
        </div>
      </div>
      <div className="set-2">
        <div className="set-21">
          <div>
            <div className="set-213">
              <Link to="/login" className="a-tag">
                <p>Dashboard</p>
              </Link>

              <div className="set-2133">
                <h1>Tell us about yout Business</h1>
                <p>
                  please provide basic goals about your business to get started
                </p>
                <form>
                  <div className="f-1">
                    <div className="f-11">
                      <label>Business Name</label>
                      <div>
                        <input
                          id="fullName"
                          type="text"
                          name="username"
                          placeholder="e.g Paylancer"
                        />
                      </div>
                    </div>

                    <div className="f-11">
                      <label>Short description of your business</label>
                      <div>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Description"
                        />
                      </div>
                    </div>
                    <div className="f-12">
                      <div>
                        <div className="f-1211">
                          <div>
                            <svg
                              width="36"
                              height="36"
                              viewBox="0 0 36 36"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="flex-none mr-3 lg:mr-5"
                            >
                              <path
                                d="M32.3403 16.1101L30.3153 13.7401C29.9403 13.2901 29.6253 12.4501 29.6253 11.8501V9.30012C29.6253 7.71012 28.3203 6.40512 26.7303 6.40512H24.1803C23.5803 6.40512 22.7253 6.09012 22.2753 5.71512L19.9053 3.69012C18.8703 2.80512 17.1753 2.80512 16.1403 3.69012L13.7403 5.71512C13.2903 6.09012 12.4503 6.40512 11.8503 6.40512H9.25531C7.66531 6.40512 6.36031 7.71012 6.36031 9.30012V11.8501C6.36031 12.4351 6.06031 13.2751 5.68531 13.7251L3.66031 16.1101C2.79031 17.1601 2.79031 18.8401 3.66031 19.8601L5.68531 22.2451C6.06031 22.6801 6.36031 23.5351 6.36031 24.1201V26.6851C6.36031 28.2751 7.66531 29.5801 9.25531 29.5801H11.8653C12.4503 29.5801 13.3053 29.8951 13.7553 30.2701L16.1253 32.2951C17.1603 33.1801 18.8553 33.1801 19.8903 32.2951L22.2603 30.2701C22.7103 29.8951 23.5503 29.5801 24.1503 29.5801H26.7003C28.2903 29.5801 29.5953 28.2751 29.5953 26.6851V24.1351C29.5953 23.5351 29.9103 22.6951 30.2853 22.2451L32.3103 19.8751C33.2253 18.8551 33.2253 17.1601 32.3403 16.1101ZM16.8753 12.1951C16.8753 11.5801 17.3853 11.0701 18.0003 11.0701C18.6153 11.0701 19.1253 11.5801 19.1253 12.1951V19.4401C19.1253 20.0551 18.6153 20.5651 18.0003 20.5651C17.3853 20.5651 16.8753 20.0551 16.8753 19.4401V12.1951ZM18.0003 25.3051C17.1753 25.3051 16.5003 24.6301 16.5003 23.8051C16.5003 22.9801 17.1603 22.3051 18.0003 22.3051C18.8253 22.3051 19.5003 22.9801 19.5003 23.8051C19.5003 24.6301 18.8403 25.3051 18.0003 25.3051Z"
                                fill="#292D32"
                              ></path>
                            </svg>
                          </div>
                          <div className="warn">
                            <div>
                              You will need these documents to complete your
                              onboarding
                            </div>
                            <div>Registration documents from the CAC</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f-3">
                    <button type="submit">
                      <span>Save and continue</span>
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

export default Setup;
