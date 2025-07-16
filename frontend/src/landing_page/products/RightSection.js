import React from "react";
import "./Products.css";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 className="text-darks">{productName}</h1>
          <p className="text-darks">{productDesription}</p>
          <a href={learnMore} className="link-style">
            Learn More{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageURL} className="image-hover" alt="Product" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
