import React from "react";
import { Link } from "react-router-dom";
import { GetUser } from "../../types";
import styles from "./Navbar.module.scss";

interface NavProps {
  user: GetUser;
  logout: () => void;
}

const Navbar: React.FC<NavProps> = ({ user, logout }) => {
  const { avatar_url, name } = user;
  return (
    <nav className={styles.Nav}>
      <div className={styles.Nav_container}>
        <div className={styles.Nav_container_content}>
          <img src={avatar_url} alt="" />
          <h4 className={styles.Nav_container_content_user}>
            Welcome, <span>{name}</span>
          </h4>
        </div>
        <Link
          to="/login"
          className={styles.Nav_container_login}
          onClick={logout}
        >
          Logout
        </Link>
      </div>
      <div className={styles.Nav_vl}></div>
    </nav>
  );
};

export default Navbar;
