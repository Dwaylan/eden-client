import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Loginpage from "../Components/Loginpage/Loginpage";
import Landingpage from "../Components/Landingpage/Landingpage";
import About from "../Components/About/";
import Nursery from "../Components/Nursery/Nursery";
import Features from "../Components/Features/Features";
import Future from "../Components/Future/Future";

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
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/features" component={Features}></Route>
      <Route exact path="/future" component={Future}></Route>
    </Switch>
  );
};

export default Router;
