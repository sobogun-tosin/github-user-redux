import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import login from "../../images/login.svg";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/githubAction";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.Login}>
      <div className={styles.Login_content}>
        <img src={login} alt="login" className={styles.Login_content_img} />
        <Link
          to="/"
          className={styles.Login_content_btn}
          onClick={() => dispatch(LoginUser())}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
