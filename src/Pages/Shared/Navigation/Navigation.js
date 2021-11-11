import { height } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/haba_logo1.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="section-margin" id="menu-area">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top border-bottom border-3 border-warning">
        <div className="container">
          <Link className="navbar-brand text-white fs-2 fw-bold" to="/">
            <img src={logo} style={{ width: "auto", height: "60px" }} />
          </Link>
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
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  Explore
                </Link>
              </li>
            </ul>
            <span className="navbar-text text-white me-1">user name</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
