import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../../redux/githubAction";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="nav-container">
        <div className="avatar">YO</div>
        <h4 className="userName">
          Welcome, <span>tosin</span>
        </h4>
      </div>
      <Link
        to="/login"
        className="login-btn"
        onClick={() => dispatch(Logout())}
        style={{ cursor: "pointer" }}
      >
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
