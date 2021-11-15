import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/haba_logo1.png";
import "./Navigation.css";

const Navigation = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container-fluid">
      <div className="section-margin" id="menu-area">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top border-bottom border-3 border-warning">
          <div className="container">
            <NavLink className="navbar-brand text-white fs-2 fw-bold" to="/">
              <img src={logo} style={{ width: "auto", height: "60px" }} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/explore">
                    Explore
                  </NavLink>
                </li>
                {user?.email ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>

                  <li className="mx-1">
                    <button onClick={logout} className="btn btn-outline-info text-capitalize">
                      logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="mx-1">
                  <NavLink className="" to="/login">
                    <button className="btn btn-warning text-capitalize">login</button>
                  </NavLink>
                </li>
              )}
            </ul>
            {user?.email && <span className="navbar-text text-white me-1">{user?.displayName}</span>}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
