import React from "react";

const Restaurants = () => {
  return (
    <div className="col-sm- 12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          src="data:image/png;base64,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"
          alt="Dominos"
          className="card-img-top mx-auto"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Domino's Pizza</h5>
          <p className="rest_address">Shi mahal b america</p>
          <div className="ratings mt-auto">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <i className="fa fa-star-o"></i>
            <span id="no_of_reviews">(35 Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
