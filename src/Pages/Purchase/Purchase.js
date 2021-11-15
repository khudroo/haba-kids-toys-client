import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Purchase = () => {
  const [toy, setToy] = useState({});

  const { id } = useParams();

  const { user, success, setSuccess } = useAuth();
  const initialInfo = {
    image: toy.image,
    brand: toy.brand,
    model: toy.model,
    name: user.displayName,
    email: user.email,
    mobile: "",
    address: "",
  };

  const [bookingData, setBookingData] = useState(initialInfo);

  // handle on blur
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBookingData = { ...bookingData };
    newBookingData[field] = value;
    setBookingData(newBookingData);
  };

  const handleBookingForm = (e) => {
    e.preventDefault();

    const booking = {
      ...bookingData,
      image: toy.image,
      brand: toy.brand,
      model: toy.model,
      name: user.displayName,
      email: user.email,
    };

    console.log(booking);
    // post booking info to server
    fetch("https://afternoon-fortress-32990.herokuapp.com/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          e.target.reset();
        }
      });
  };

  // data load
  useEffect(() => {
    fetch(`https://afternoon-fortress-32990.herokuapp.com/toys/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);

  return (
    <>
      <Navigation></Navigation>
      <div className="py-4">
        <div className="container">
          {/* section heading */}
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="text-center py-3">
                <h2 className="fw-bold">
                  <span className="text-warning"> Placed</span> Your Order
                </h2>
                <h3 className="py-5">
                  Baby, you can order your favorite <br /> toy from our page
                  right now!
                </h3>
              </div>
            </div>
          </div>

          {/* single toy data */}
          <div className="row justify-content-center vh-75 align-items-center">
            <div className="col-md-5">
              <div className="border border-success p-3">
                <div>
                  <img className="img-fluid" src={toy?.image} alt="toy" />
                </div>
                <h3>Brand : {toy?.brand}</h3>
                <h6>Model : {toy?.model}</h6>
                <h5>Price : ${toy?.price} </h5>
                <p>{toy?.des}</p>
              </div>
            </div>

            {/* address info */}
            <div className="col-md-5">
              <div className="w-75 mx-auto p-3">
                <form onSubmit={handleBookingForm}>
                  <h2 className="text-center py-3 fw-bold">
                    Your <span className="text-warning">Address</span>
                  </h2>

                  <div>
                    <input
                      className="form-control mb-4"
                      type="text"
                      name="image"
                      defaultValue={toy.image}
                      disabled
                    />
                  </div>

                  <div>
                    <input
                      className="form-control mb-4"
                      type="text"
                      name="brand"
                      defaultValue={toy.brand}
                      disabled
                    />
                  </div>

                  <div>
                    <input
                      className="form-control mb-4"
                      type="text"
                      name="model"
                      defaultValue={toy.model}
                      disabled
                    />
                  </div>

                  <div>
                    <input
                      className="form-control mb-4"
                      type="text"
                      onBlur={handleOnBlur}
                      name="name"
                      defaultValue={user.displayName}
                    />
                  </div>

                  <div>
                    <input
                      className="form-control mb-4"
                      type="email"
                      onBlur={handleOnBlur}
                      name="email"
                      defaultValue={user.email}
                    />
                  </div>

                  <div>
                    <input
                      className="form-control mb-4"
                      type="number"
                      placeholder="Mobile"
                      onBlur={handleOnBlur}
                      name="mobile"
                    />
                  </div>

                  <div>
                    <textarea
                      className="form-control mb-4"
                      type="text"
                      placeholder="Your Full Address"
                      onBlur={handleOnBlur}
                      name="address"
                    />
                  </div>

                  <div>
                    <input
                      className="form-control mb-4 bg-warning text-uppercase fw-bold"
                      type="submit"
                      value="Place Order"
                    />
                  </div>

                  {success && (
                    <div className="alert alert-success" role="alert">
                      Order Successful!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Purchase;
