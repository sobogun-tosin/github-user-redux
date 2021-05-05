import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Error from "./pages/error/Error";
import Login from "./pages/login/Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" component={DashBoard} exact />
        <Route path="/login" component={Login} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
