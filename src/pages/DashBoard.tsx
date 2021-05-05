import React from "react";
import { useSelector } from "react-redux";
import Info from "../components/info/Info";
import Navbar from "../components/navbar/Navbar";
import Search from "../components/search/Search";
import User from "../components/user/User";
import { RootStore } from "../redux/store";
import loader from "../images/Misterious mist.gif";
import Repos from "../components/chart/Repos";

const DashBoard = () => {
  const loading = useSelector((state: RootStore) => state.github.loading);

  if (loading) {
    return (
      <div>
        <Search />
        <div className="loading">
          <img src={loader} alt="preloader" className="loading" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </div>
  );
};

export default DashBoard;
