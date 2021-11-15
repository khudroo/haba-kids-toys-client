import React, { useEffect, useState } from "react";
import "./AllOrders.css";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  // load all orders
  useEffect(() => {
    fetch(`https://afternoon-fortress-32990.herokuapp.com/bookings`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  console.log(allOrders);

  // delete my booking
  const handleDeleteOrder = (id) => {
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
            const remainingOrders = allOrders.filter(
              (order) => order._id !== id
            );
            setAllOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h3 className="text-capitalize text-center fw-bold">
                All Orders
              </h3>
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th>Image</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allOrders?.map((order) => (
                    <tr key={order._id}>
                      <td className="align-middle">
                        <img
                          src={order.image}
                          class="img-fluid"
                          style={{
                            width: "100px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                          alt="product img"
                        />
                      </td>
                      <td className="align-middle">{order.brand}</td>
                      <td className="align-middle">{order.model}</td>
                      <td className="align-middle">
                        <select class="form-select form-select-sm w-75 align-middle">
                          <option selected value="1">
                            Pending
                          </option>
                          <option value="2">Rejected</option>
                          <option value="3">Shipped</option>
                        </select>
                      </td>

                      <td className="align-middle">
                        <span className="align-middle">
                          <button
                            onClick={() => handleDeleteOrder(order._id)}
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
    </div>
  );
};

export default AllOrders;
