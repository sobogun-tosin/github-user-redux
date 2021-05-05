import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import login from "../../images/login.svg";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/githubAction";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-img-container">
          <img src={login} alt="login" className="login-img" />
        </div>
        <div className="btn-container">
          <Link to="/" className="btn" onClick={() => dispatch(LoginUser())}>
            LOG IN/ SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
