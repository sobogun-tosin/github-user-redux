import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Info from "../components/info/Info";
import Navbar from "../components/navbar/Navbar";
import Search from "../components/search/Search";
import User from "../components/user/User";
import { RootStore } from "../redux/store";
import loader from "../images/Misterious mist.gif";
import Repos from "../components/chart/Repos";
import { Logout } from "../redux/githubAction";

const DashBoard = () => {
  const loading = useSelector((state: RootStore) => state.github.loading);
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.github.user);
  const followers = useSelector((state: RootStore) => state.github.follower);

  return loading ? (
    <>
      <Search />
      <div className="loading">
        <img src={loader} alt="preloader" className="loading" />
      </div>
    </>
  ) : (
    <>
      <Navbar user={user} logout={() => dispatch(Logout())} />
      <Search />
      <Info {...user} />
      <User users={user} followers={followers} />
      <Repos />
    </>
  );
};

export default DashBoard;
