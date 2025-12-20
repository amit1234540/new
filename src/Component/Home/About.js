import React from 'react';
import img1 from "../Aboutimg/about--1.png";
import img2 from "../Aboutimg/about1.2.png";
import Nav from "../Navbar/Nav";

const AboutSection = () => {
  return (
    <>
  <Nav/>
    <section className="container about-section">
      <div className="row">
        {/* Our Story Section */}
        <div className="col-md-6 text-section">
          <h2>Our Story</h2>
          <p className="subtitle">THE HIGH STRESS FAVOURITE</p>
          <p>
            Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.
            Vestibulum volutpat pretium libero. In at quam vitae odio laoreet tincidunt.
          </p>
        </div>
        <div className="col-md-6 image-section">
          <img
            src={img1}
            alt="Our Story"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="row">
        {/* Who We Are Section */}
        <div className="col-md-6 image-section">
          <img
            src={img2}
            alt="Who We Are"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 text-section">
          <h2>Who We Are?</h2>
          <p className="subtitle">THE HIGH STRESS FAVOURITE</p>
          <p>
            Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.
            Vestibulum volutpat pretium libero. In at quam vitae odio laoreet tincidunt.
          </p>
        </div>
      </div>


      
    </section>
    </>
  );
};

export default AboutSection;
