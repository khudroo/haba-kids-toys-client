import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./purchase.css";

const Purchase = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="conatiner matop">
        <div
          className="alert alert-primary d-flex justify-content-center"
          role="alert"
        >
          <h1> Payment system is comming soon</h1>
        </div>

        <div className="row justify-content-center align-item-center ">
          <div className="col-md-6 matop">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Purchase;
