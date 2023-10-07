import React, { Fragment } from "react";
import { Route,Outlet  } from "react-router-dom";



const PrivateRoute = ({
  component: Component,
  path,
  name,
  exact,
}) => {
  return (
    <Fragment>
      {/* <Redirect from={"/"} to={"/dashboard"} /> */}
      {/* <Route
        path={path}
        exact={exact}
        // name={name}
        render={(props) => {
          // let token = Auth.getCipher();
          // if (!token) {
          //   return <Redirect to={{ pathname: "/login" }} />;
          // }
          return <Component />;
        }}
       
      /> */}
         <Outlet/>
    </Fragment>
  );
};

export default PrivateRoute;
