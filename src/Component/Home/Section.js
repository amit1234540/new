import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img1 from "../img/section-1.png";


const LuxuryWatch = () => {
  return (
    <Container  className="luxury-watch-section">
      <Row className="align-items-center">
        <Col lg={6} md={12} className="text-section">
          <h1 className="display-4">Luxury Watches</h1>
          <p className="lead">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          <Button variant="dark" className="shop-now-btn">
            Shop Now
          </Button>
        </Col>
        <Col lg={6} md={12} className="image-section">
          <img
            src={img1} // Replace with actual image path
            alt="Luxury Watch"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LuxuryWatch;
