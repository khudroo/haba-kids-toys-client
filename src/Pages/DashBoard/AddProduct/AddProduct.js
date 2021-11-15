import React from "react";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://afternoon-fortress-32990.herokuapp.com/toys", data)
      .then((res) => {
        if (res.data.insertedId) {
          <div className="alert alert-success" role="alert">
            Toy Added Successfully!
          </div>;
          reset();
        }
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center vh-100 align-items-center">
          <div className="col-md-6">
            <div className="border border-dark p-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center py-3 fw-bold">Add Toy</h2>
                <input
                  className="form-control mb-3"
                  {...register("brand", { required: true })}
                  placeholder="Product Name"
                />
                <input
                  className="form-control mb-3"
                  {...register("model")}
                  placeholder="Model"
                />
                <input
                  className="form-control mb-3"
                  {...register("des")}
                  placeholder="Description"
                />
                <input
                  className="form-control mb-3"
                  {...register("price")}
                  placeholder="Price"
                />
                <input
                  className="form-control mb-3"
                  {...register("image")}
                  placeholder="Image Url"
                />
                <button
                  className="form-control mb-3 btn btn-outline-warning text-uppercase fw-bold"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
