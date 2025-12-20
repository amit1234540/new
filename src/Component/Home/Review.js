import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../Reviewimg/tesm-1.jpg';  
import img2 from '../Reviewimg/tesm-2.jpg';
import img3 from '../Reviewimg/tesm-3.jpg';


const Testimonials = () => {
  return (
    <Container fluid className="testimonials-section py-5">
      <h2 className="text-center">TESTIMONIALS</h2>
      <Carousel indicators={false} interval={4000} className="testimonials-carousel">
        <Carousel.Item>
          <div className="testimonial-item text-center">
            <div className="testimonial-rating">
              {'★'.repeat(5)}
            </div>
            <p className="testimonial-quote">
              "Amazing piece of history"
            </p>
            <p className="testimonial-review">
              Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...
            </p>
            <img
              src={img1}
              className="testimonial-image"
              alt="Ann Smith"
            />
            <h5 className="testimonial-name">ANN SMITH</h5>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="testimonial-item text-center">
            <div className="testimonial-rating">
              {'★'.repeat(5)}
            </div>
            <p className="testimonial-quote">
              "Fabulous Grounds"
            </p>
            <p className="testimonial-review">
              Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...
            </p>
            <img
              src={img2}
              className="testimonial-image"
              alt="Saitama One"
            />
            <h5 className="testimonial-name">SAITAMA ONE</h5>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="testimonial-item text-center">
            <div className="testimonial-rating">
              {'★'.repeat(5)}
            </div>
            <p className="testimonial-quote">
              "Great vineyard tour and tasting!"
            </p>
            <p className="testimonial-review">
              Blood bank canine teeth larynx occupational therapist oncologist optician plaque spinal tap stat strep...
            </p>
            <img
              src={img3}
              className="testimonial-image"
              alt="Sara Colinton"
            />
            <h5 className="testimonial-name">SARA COLINTON</h5>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Testimonials;





