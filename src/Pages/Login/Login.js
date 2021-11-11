import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginForm = (e) => {
    loginUser(loginData.email, loginData.password, location, history);

    e.preventDefault();
  };

  return (
    <div>
      <Navigation></Navigation>

      <div className="container pt-5">
        <div className="row justify-content-center py-5">
          <div className="col-md-6 offset-md-1 py-5">
            <h2 className="text-center">Login</h2>
            
            {!isLoading && ( 
            <form onSubmit={handleLoginForm}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Type Your Email"
                  onChange={handleOnChange}
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Type Your Password"
                  onChange={handleOnChange}
                  name="password"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <span className="text-secondary fw-bold px-5">
                Forgot your password?
              </span>
            </form>
            )}

            {/* Show spinner */}
            {isLoading && (
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="text-center mt-3">
                      <div className="spinner-border text-danger" role="status">
                        <span className="visully-hidden"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {user?.email &&(
              <div className="alert alert-success" role="alert">
              Logged in successfuly
            </div>
            )}
            
            {authError &&(
              <div className="alert alert-danger" role="alert">
              {authError}
            </div>
            )}

            <p className="py-3">
              Now are you new user? Please <NavLink to="/register">Register</NavLink>
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Login;
