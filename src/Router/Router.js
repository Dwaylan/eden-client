import React from "react";
import { Switch, Route } from "react-router";
// commenting out redirect for now  but it will need to be added in the react-router import
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
      <Route path="/" component={Landingpage}></Route>
      <Route path="/nursery" component={Nursery}></Route>
    </Switch>
  );
};

export default Router;
