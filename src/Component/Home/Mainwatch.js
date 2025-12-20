import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import img1 from "../img/menimg1.jpg";
import Nav from "../Navbar/Nav";


const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
    <Nav/>
    <Container className="product-page mt-5">
      <Row>
        <Col md={6} className="product-images">
          <div className="main-image">
            <img src={img1} alt="Product" className="img-fluid" />
          </div>
          <div className="image-gallery mt-3">
            <img src={img1} alt="Gallery 1" className="img-fluid gallery-item" />
            <img src={img1} alt="Gallery 2" className="img-fluid gallery-item" />
            <img src={img1} alt="Gallery 3" className="img-fluid gallery-item" />
          </div>
        </Col>
        <Col md={6} className="product-details">
          <h2 className="product-title">Bering Aurora Collection</h2>
          <div className="price-section">
            <span className="old-price">$90.00</span>
            <span className="new-price">$75.00</span>
            <Badge pill bg="danger" className="discount-badge">
              -17%
            </Badge>
          </div>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
          </p>
          <p><strong>27 in stock</strong></p>
          <div className="quantity-section d-flex align-items-center">
            <Button variant="secondary" onClick={decreaseQuantity}>-</Button>
            <span className="quantity mx-3">{quantity}</span>
            <Button variant="secondary" onClick={increaseQuantity}>+</Button>
          </div>
          <div className="action-buttons mt-4">
            <Button variant="dark" className="me-3">Add to Cart</Button>
            <Button variant="primary">Buy Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ProductPage;
