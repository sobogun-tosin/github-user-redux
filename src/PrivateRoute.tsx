import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { RootStore } from "./redux/store";

const PrivateRoute = ({ ...rest }) => {
  const isLogin = useSelector((state: RootStore) => state.github.login);
  return isLogin ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
