import React from 'react';
import img1 from '../img/blog-1.jpg';
import img2 from '../img/blog-2.jpg';
import Nav from "../Navbar/Nav";


const WatchSection = () => {
  return (
    <>
    <Nav/>
    <div className="container my-5">
      {/* First Section */}
      <div className="row mb-5">
        <div className="col-md-12">
          <div className="card">
            <img src={img1} className="card-img-top img-fluid" alt="Watch 1" />
            <div className="card-body">
              <h5 className="card-title">Traveling Solo is Awesome</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis eros eu est
                venenatis tristique...
              </p>
              <a href="#" className="btn btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <img src={img2} className="card-img-top img-fluid" alt="Watch 2" />
            <div className="card-body">
              <h5 className="card-title">A Beautiful Sunday Morning</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis eros eu est
                venenatis tristique...
              </p>
              <a href="#" className="btn btn-dark">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WatchSection;
