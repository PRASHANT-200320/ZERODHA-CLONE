import React from "react";
import "./Products.css";


function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} className="image-hover" alt="Product" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="text-darks">{productName}</h1>
        <p className="text-darks">{productDesription}</p>
          <div>
            <a href={tryDemo} className="link-style">
              Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} className="link-style ml-50">
              Learn More <i className="fa fa-long-arrow-right " aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" className="image-hover" alt="Google Play" />
            </a>
             <a href={appStore}className="ml-50">
              <img src="media/images/appstoreBadge.svg" className="image-hover" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;