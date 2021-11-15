import React, { useEffect, useState } from "react";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    fetch(`https://afternoon-fortress-32990.herokuapp.com/toys`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  // delete product
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are You Sure, You Want To Delete");
    if (proceed) {
      const url = `https://afternoon-fortress-32990.herokuapp.com/toys/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingOrders = allProducts.filter(
              (order) => order._id !== id
            );
            setAllProducts(remainingOrders);
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
              <h4 className="text-center text-capitalize fw-bold">
                Manage Products
              </h4>
              <table className="table">
                <thead>
                  <tr className="text-capitalize">
                    <th>Image</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>price</th>
                    <th className="ps-5">action</th>
                  </tr>
                </thead>
                <tbody>
                  {allProducts?.map((product) => (
                    <tr key={product._id}>
                      <td className="align-middle">
                        <img
                          src={product.image}
                          class="img-fluid"
                          style={{
                            width: "100px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                          alt="product img"
                        />
                      </td>
                      <td className="align-middle">{product.brand}</td>
                      <td className="align-middle">{product.model}</td>
                      <td className="align-middle">$ {product.price}</td>
                      <td className="align-middle">
                        <span className="align-middle me-2">
                          <button
                            type="button"
                            className="btn btn-info btn-sm text-white"
                          >
                            Update
                          </button>
                        </span>

                        <span className="align-middle">
                          <button
                            onClick={() => handleDeleteProduct(product._id)}
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

export default ManageProducts;
