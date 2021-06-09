import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import "./Info.scss";

interface Item {
  id: number;
  icon: any;
  label: string;
  value: number;
  color: string;
}

const Info = () => {
  const user = useSelector((state: RootStore) => state.github.user);
  const { followers, following, public_gists, public_repos } = user;

  const items: Item[] = [
    {
      id: 1,
      icon: <i className="far fa-list-alt"></i>,
      label: "repos",
      value: public_repos,
      color: "red",
    },
    {
      id: 2,
      icon: <i className="fas fa-users"></i>,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <i className="fas fa-user-plus"></i>,
      label: "following",
      value: following,
      color: "blue",
    },
    {
      id: 4,
      icon: <i className="far fa-caret-square-up"></i>,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];
  return (
    <div className="info-container">
      {items.map((item: Item) => {
        const { id, icon, value, color, label } = item;
        return (
          <div className="info-card" key={id}>
            <div className={`info-avatar ${color}`}>{icon}</div>
            <div className="info-data">
              <span>{value}</span>
              <p>{label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
