import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Loginpage from "../Components/Loginpage/Loginpage";
import Landingpage from "../Components/Landingpage/Landingpage";
import Nursery from "../Components/Nursery/Nursery";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landingpage}></Route>
      <ProtectedRoute
        exact
        path="/nursery"
        component={Nursery}
      ></ProtectedRoute>
      <Route exact path="/login" component={Loginpage}></Route>
    </Switch>
  );
};

export default Router;
