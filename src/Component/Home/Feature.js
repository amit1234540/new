import React from 'react';


const FeatureSection = () => {
  return (
    <div className="container my-5">
      <div className="row text-center justify-content-center feature-icons">
        {/* Free Delivery Feature */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="icon-box">
            <i className="bi bi-box-seam icon"></i>
            <h5>Free delivery</h5>
            <p>For all orders above $45</p>
          </div>
        </div>

        {/* Secure Payments Feature */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="icon-box">
            <i className="bi bi-shield-lock icon"></i>
            <h5>Secure payments</h5>
            <p>Confidence on all your devices</p>
          </div>
        </div>

        {/* Top-notch Support Feature */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="icon-box">
            <i className="bi bi-headset icon"></i>
            <h5>Top-notch support</h5>
            <p>sayhello@vapier.com</p>
          </div>
        </div>

        {/* 180 Days Return Feature */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="icon-box">
            <i className="bi bi-arrow-counterclockwise icon"></i>
            <h5>180 Days Return</h5>
            <p>Shop with confidence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
