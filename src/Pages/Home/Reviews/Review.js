import React, { useEffect, useState } from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://afternoon-fortress-32990.herokuapp.com/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // console.log(reviews);

  return (
    <>
      <div className="py-5" id="review">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center py-3">
                <h2 className="fw-bold">What Our Client Reviews</h2>
                <p>
                  Independent and unbiased travel reviews by The Travel
                  Magazine. We test travel products, hotels, tours and
                  activities to help you make an informed decision.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-3">
            {reviews?.map((review) => (
              <div className="col-md-5" key={Math.random()}>
                <div className="p-3 mb-2 single-client border border-dark rounded-1">
                  <div className="image-center">
                    <img
                      className="img-fluid"
                      src={review.image}
                      alt="profile img"
                    />
                  </div>
                  <p>{review.review}</p>
                  <h6>Rating : {review.star}</h6>

                  {review.star == 1 && (
                    <span className="text-warning">
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                    </span>
                  )}
                  {review.star == 2 && (
                    <span className="text-warning">
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                    </span>
                  )}
                  {review.star == 3 && (
                    <span className="text-warning">
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                    </span>
                  )}

                  {review.star == 4 && (
                    <span className="text-warning">
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                    </span>
                  )}

                  {review.star == 5 && (
                    <span className="text-warning">
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                      <FontAwesomeIcon icon={faStar} className="faIcon" />
                    </span>
                  )}

                  <h6 className="font-style">{review.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
