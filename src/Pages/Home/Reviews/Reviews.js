import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/reviews.json`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="text-center py-3">
              <div className="text-capitalize">
                <h2>Real Reviews From Real Customers</h2>
                <p>
                  We are so proud of our high-quality toys and the joy and
                  learning they bring to families. Read what customers have to
                  say about our toys and games.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          {reviews?.map((review) => (
            <div className="col-md-4  py-3">
              <div className="card">
                <div className="card-body text-center">
                  <img
                    className="rounded-circle"
                    className="img-fluid"
                    src={review.image}
                    alt="review"
                  />
                  <h3 className="py-2"> {review.title}</h3>
                  <h6> {review.name}</h6>
                  <p> {review.des}</p>
                  <span className="btn btn-secondary">
                    Rating:{" "}
                    {review.star == 2 && (
                      <span className="text-warning px-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                      </span>
                    )}
                    {review.star == 3 && (
                      <span className="text-warning px-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                      </span>
                    )}
                    {review.star == 4 && (
                      <span className="text-warning px-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                      </span>
                    )}
                    {review.star == 5 && (
                      <span className="text-warning px-2">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="faIcon mx-1"
                        />
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
