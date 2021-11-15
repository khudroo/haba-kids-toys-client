import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { setSuccess, success } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleMakeAdmin = (e) => {
    e.preventDefault();
    const bookings = { email };

    fetch(`https://afternoon-fortress-32990.herokuapp.com/bookings/admin`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
  };
  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-md-6">
            <div className="border p-4">
              <h2 className="py-3">Make An Admin</h2>
              <form onSubmit={handleMakeAdmin}>
                <div className="mb-2">
                  <input
                    className="form-control"
                    placeholder="Email"
                    onBlur={handleOnBlur}
                  />
                </div>
                <button type="submit" className="btn btn-info mb-2">
                  Make Admin
                </button>
              </form>

              {success && (
                <div className="alert alert-success" role="alert">
                  Made Admin Successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
