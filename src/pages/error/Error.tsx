import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="error-container">
        <h1>404</h1>
        <p>Oops! sorry page not found.</p>
        <Link to="/" className="btn">
          HOME
        </Link>
      </div>
    </div>
  );
};

export default Error;
