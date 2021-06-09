import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../../redux/githubAction";
import { RootStore } from "../../redux/store";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.github.user);
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-content">
          <div className="avatar">
            <img src={user.avatar_url} alt="" />
          </div>
          <h4 className="userName">
            Welcome, <span>{user.name}</span>
          </h4>
        </div>
        <Link
          to="/login"
          className="login-btn"
          onClick={() => dispatch(Logout())}
        >
          Logout
        </Link>
      </div>
      <div className="vl"></div>
    </nav>
  );
};

export default Navbar;
