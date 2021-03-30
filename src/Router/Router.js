import React from "react";
import { Switch, Route } from "react-router";
// commenting out redirect for now  but it will need to be added in the react-router import
import Loginpage from "../Components/Loginpage/Loginpage";
import Landingpage from "../Components/Landingpage/Landingpage";
import Nursery from "../Components/Nursery/Nursery";

// const checkAuth = () => {
//   const cookies = cookie.parse(document.cookie);
//   return cookies["loggedIn"] ? true : false;
// };

// // Write ProtectedRoute function here
// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landingpage}></Route>
      <Route exact path="/nursery" component={Nursery}></Route>
      <Route exact path="/login" component={Loginpage}></Route>
    </Switch>
  );
};

export default Router;
