import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();

  // Handle on change 
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.password2) {
      alert("Password did not match");
      return;
    }
    registerUser(registerData.email, registerData.password);
    e.preventDefault();

  };

  return (
    <div>
      <Navigation></Navigation>

      <div className="container pt-5">
        <div className="row justify-content-center py-5">
          <div className="col-md-6 offset-md-1 py-5">
            <h2 className="text-center">Register</h2>

            {!isLoading && (
              <form onSubmit={handleRegisterForm}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Your Full Name"
                    onChange={handleOnChange}
                    name="name"
                  />
                </div>
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
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Type Your Password"
                    name="password"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Your Password"
                    onChange={handleOnChange}
                    name="password2"
                  />
                </div>

                <button
                  type="submit"
                  value="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
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
              User Created successfuly
            </div>
            )}
            
            {authError &&(
              <div className="alert alert-danger" role="alert">
              {authError}
            </div>
            )}
            

            <p className="py-3">
              Already have an account? Please <NavLink to="/login">Login</NavLink>
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Register;
