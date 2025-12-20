import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img1 from "../img/men.jpg";
import img2 from "../img/gril.jpg";
import { useHistory } from 'react-router-dom';

const WatchSection = () => {
  const history = useHistory();
  return (
    <Container className="watch-section py-5">
      <Row>
        {/* Men's Watches Section */}
        <Col md={6} className="watch-col">
          <div className="watch-box">
            <img 
              src={img1} 
              alt="Men's Watches" 
              className="img-fluid watch-image" 
            />
            <div className="watch-text">
              <h3>Mens Watches</h3>
              <Button variant="light" className="shop-button" onClick={() => history.push("/MenWatch")}>Shop Now</Button>
            </div>
          </div>
        </Col>

        {/* Ladies' Watches Section */}
        <Col md={6} className="watch-col">
          <div className="watch-box">
            <img 
              src={img2} 
              alt="Ladies' Watches" 
              className="img-fluid watch-image" 
            />
            <div className="watch-text">
              <h3>Ladies' Watches</h3>
              <Button variant="light" className="shop-button" onClick={() => history.push("/Shop")}>Shop Now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WatchSection;
