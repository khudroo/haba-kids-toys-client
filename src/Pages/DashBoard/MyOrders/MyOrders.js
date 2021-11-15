import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const [myBooking, setMyBooking] = useState([]);
  const { user } = useAuth();

  // load my booking
  useEffect(() => {
    fetch(
      `https://afternoon-fortress-32990.herokuapp.com/bookings?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, [user.email]);

  // delete my booking
  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("Are You Sure, You Want To Delete");

    if (proceed) {
      const url = `https://afternoon-fortress-32990.herokuapp.com/bookings/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingBooking = myBooking.filter(
              (singleBooking) => singleBooking._id !== id
            );
            setMyBooking(remainingBooking);
          }
        });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table border ">
              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myBooking?.map((singleBooking) => (
                  <tr key={singleBooking._id}>
                    <td className="align-middle">
                      <img
                        src={singleBooking.image}
                        class="img-fluid"
                        style={{
                          width: "100px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                        alt="product img"
                      />
                    </td>
                    <td className="align-middle">{singleBooking.brand}</td>
                    <td className="align-middle">{singleBooking.model}</td>
                    <td className="align-middle">
                      <span>
                        <button
                          onClick={() => handleDeleteBooking(singleBooking._id)}
                          type="button"
                          className="btn btn-danger btn-sm text-white"
                        >
                          Delete
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
