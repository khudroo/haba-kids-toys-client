import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Explore = () => {
  const [esplores, setEsplores] = useState([]);

  useEffect(() => {
    fetch(`/fackData.json`)
      .then((res) => res.json())
      .then((data) => setEsplores(data));
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <div className="container py-5 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="text-center py-3">
                <div className="text-capitalize">
                  <h2>Explore Our Products</h2>
                  <p>
                    All of our online kids’ toys help children grow, last for
                    years, and bring families together. But these are some that
                    customers and staff alike have loved. We’ve featured just a
                    few of our favorite toys and games for all ages to help
                    point you in the right direction for your little one!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {esplores?.map((product) => (
              <div className="col-md-6">
                <div className="border p-3 single-product">
                  <div className>
                    <img
                      style={{ width: "auto", height: "420px" }}
                      src={product.image}
                      alt="product"
                    />
                  </div>
                  <h3 className="py-2"> {product.title}</h3>
                  <p> {product.des}</p>
                  <h3 className="pb-2"> Price: $ {product.price}</h3>
                  <Link>
                    <button className="btn btn-warning  text-capitalize">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explore;
