import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [prodructs, setProdructs] = useState([]);

  const limitProducts = prodructs?.slice(0, 6);

  useEffect(() => {
    fetch(`/fackData.json`)
      .then((res) => res.json())
      .then((data) => setProdructs(data));
  }, []);
  console.log(limitProducts);

  return (
    <div className="container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center py-3">
              <div className="text-capitalize">
                <h2>Our Products</h2>
                <p>
                  At HABA USA’s online toy store, we offer a wide range of
                  educational toys and games for children of all ages. From
                  classic toys for infant development to outdoor science and
                  exploration gear for older children, we’ve crafted and curated
                  a selection of high-quality toys to inspire learning and
                  discovery.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {limitProducts?.map((product) => (
            <div className="col-md-4">
              <div className="border p-3 single-product">
                <div className>
                  <img
                    className="img-fluid"
                    src={product.image}
                    alt="product"
                  />
                </div>
                <h3 className="py-3"> {product.title}</h3>
                <p> {product.des}</p>
                <h3 className="pb-2"> Price: $ {product.price}</h3>
                <Link to="/explore">
                  <button className="btn btn-warning text-capitalize">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
