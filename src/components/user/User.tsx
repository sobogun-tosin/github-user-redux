import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootStore } from "../../redux/store";
import { Follower } from "../../redux/types";
import "./User.scss";

const User = () => {
  const users = useSelector((state: RootStore) => state.github.user);
  const followers = useSelector((state: RootStore) => state.github.follower);

  const {
    avatar_url,
    login,
    name,
    blog,
    email,
    html_url,
    bio,
    location,
  } = users;

  console.log(users);
  return (
    <div className="user-container">
      <div className="user-content">
        <div className="user-data">
          User
          <div className="user-header">
            <img src={avatar_url} alt="User Img" className="img" />
            <div className="header-data">
              <h3>{name}</h3>
              <span>@{login}</span>
            </div>
            <Link target="_blank" to={html_url} className="link">
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
        <div className="user-follower">
          Followers
          <div className="follower-body">
            {followers.map((follower: Follower, index: number) => {
              const { avatar_url, html_url, login } = follower;
              return (
                <div className="follower-content" key={index}>
                  <img src={avatar_url} alt="img" className="img" />
                  <Link target="_blank" to={html_url} className="follower-data">
                    <h3>{login}</h3>
                    <span>{html_url}</span>
                  </Link>
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
