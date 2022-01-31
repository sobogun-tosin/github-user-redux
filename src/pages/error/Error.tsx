import React from "react";
import styles from "./Error.module.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={styles.Error}>
      <h1>404</h1>
      <p>Oops! sorry page not found.</p>
      <Link to="/" className={styles.Error_btn}>
        HOME
      </Link>
    </div>
  );
};

export default Error;
