import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/register">
        <p>Register</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
    </div>
  );
};

export default Home;
