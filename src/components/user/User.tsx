import React from "react";
import { Link } from "react-router-dom";
import { Follower, GetUser } from "../../types";
import styles from "./User.module.scss";

interface UsersProps {
  users: GetUser;
  followers: Follower[];
}

const User: React.FC<UsersProps> = ({ users, followers }) => {
  const { avatar_url, login, name, blog, email, html_url, bio, location } =
    users;

  return (
    <div className={styles.User}>
      <div className={styles.User_container}>
        <div className={styles.User_container_info}>
          User
          <div className={styles.User_container_info_header}>
            <div className={styles.User_container_info_header_content}>
              <img src={avatar_url} alt="User Img" />
              <div className={styles.User_container_info_header_content_data}>
                <h3>{name}</h3>
                <span>@{login}</span>
              </div>
            </div>
            <Link
              target="_blank"
              to={html_url}
              className={styles.User_container_info_header_content_link}
            >
              follow
            </Link>
          </div>
          <span>{bio ? bio : "Software Developer"}</span>
          <div className="user-body">
            <h4>
              <i
                className="fas fa-map-marker-alt"
                style={{ marginRight: 10 }}
              ></i>
              <span>{location ? location : "Lagos-Nigeria"}</span>
            </h4>
            <h4>
              <i className="fas fa-book" style={{ marginRight: 10 }}></i>
              <span>{blog ? blog : "blog"}</span>
            </h4>
            <h4>
              <i className="far fa-envelope" style={{ marginRight: 10 }}></i>
              <span>{email ? email : "example@mail.com"}</span>
            </h4>
          </div>
        </div>
        <div className={styles.User_container_info}>
          Followers
          <div className={styles.User_container_follower_body}>
            {followers.map((follower: Follower, index) => {
              const { avatar_url, html_url, login } = follower;
              return (
                <div
                  className={styles.User_container_follower_body_content}
                  key={index}
                >
                  <img src={avatar_url} alt="img" />
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.User_container_follower_body_content_link}
                  >
                    <h3>{login}</h3>
                    <span>follow</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
