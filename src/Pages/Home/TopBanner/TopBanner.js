import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.jpg";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";

const TopBanner = () => {
  return (
    <div
      className="container"
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={banner} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block text-white">
            <h2>Come Play!</h2>
            <h5 className="fw-normal">
              Earn points for referring friends, making purchases, and more.
              Redeem points for discounts on future purchases.
            </h5>
            <Link to="/explore">
              <button className="btn btn-warning mt-3 px-4 fs-4 fw-bold text-capitalize">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={banner1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block text-white">
            <h2>Kullerbu Track System</h2>
            <h5 className="fw-normal">
              Kullerbü takes the train sets you had as a kid to the next level.
              They’re durable, expandable, and endlessly fun to build and
              rebuild. They’re also designed to grow with your child, from ball
              track toys and dominoes that are easy to use for kids 1-2 years
              old to play tracks, cars, and accessories that allow children 3-5
              years or older to create their own worlds.
            </h5>
            <Link to="/explore">
              <button className="btn btn-warning mt-3  px-4 fs-4 fw-bold text-capitalize">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block text-white">
            <h2>Baby Toys</h2>
            <h5 className="fw-normal">
              Finding safe, fun infant toys can be a challenge, but at HABA USA,
              we’re making it easy! Our newborn development toys will help start
              your baby off on an educational and creative path, allowing you to
              create memories your family is sure to cherish. Shop now to find
              cute baby toys that will help your child learn, grow, and play!
            </h5>
            <Link to="/explore">
              <button className="btn btn-warning mt-3 px-4 fs-4 fw-bold text-capitalize">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TopBanner;
