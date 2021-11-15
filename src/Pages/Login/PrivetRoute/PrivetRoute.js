import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div className="col-md-12">
    <div className="text-center mt-3">
      <div className="spinner-border text-danger" role="status">
        <span className="visully-hidden"></span>
      </div>
    </div>
    </div>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;