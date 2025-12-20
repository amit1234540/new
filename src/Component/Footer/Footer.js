// // Footer.js
// import React from "react";


// const Footer = () => {
//   return (
//     <footer className="footer bg-light pt-5">
//       <div className="container">
//         <div className="row">
//           {/* Logo and Contact Info */}
//           <div className="col-md-4">
//             <h2 className="footer-logo">Watch</h2>
//             <address className="footer-address">
//               katargam surat<br />
//               <a href="mailto:sayhello@wrishwatch.com">amit9577@gmail.com</a><br />
//               <a href="tel:8238479577">8238479577</a>
//             </address>
//             <div className="social-icons mt-3">
//               <a href="#" className="footer-icon"><i className="bi bi-twitter"></i></a>
//               <a href="#" className="footer-icon"><i className="bi bi-dribbble"></i></a>
//               <a href="#" className="footer-icon"><i className="bi bi-behance"></i></a>
//               <a href="#" className="footer-icon"><i className="bi bi-instagram"></i></a>
//             </div>
//           </div>

//           {/* Information Section */}
//           <div className="col-md-2">
//             <h5 className="footer-heading">INFORMATION</h5>
//             <ul className="list-unstyled">
//               <li><a href="#">Shipping</a></li>
//               <li><a href="#">Warranty & Authenticity</a></li>
//               <li><a href="#">Terms & Conditions</a></li>
//               <li><a href="#">Privacy Policy</a></li>
//             </ul>
//           </div>

//           {/* Help Section */}
//           <div className="col-md-2">
//             <h5 className="footer-heading">HELP</h5>
//             <ul className="list-unstyled">
//               <li><a href="#">Contact Us</a></li>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Reviews</a></li>
//               <li><a href="#">Terms of Service</a></li>
//               <li><a href="#">Refund Policy</a></li>
//             </ul>
//           </div>

//           {/* Services Section */}
//           <div className="col-md-2">
//             <h5 className="footer-heading">SERVICES</h5>
//             <ul className="list-unstyled">
//               <li><a href="#">Sale</a></li>
//               <li><a href="#">Quick Ship</a></li>
//               <li><a href="#">New Designs</a></li>
//               <li><a href="#">Protection Plan</a></li>
//               <li><a href="#">Gift Cards</a></li>
//             </ul>
//           </div>

//           {/* Payment Icons */}
          
//         </div>

//         <div className="col-md-2">
//         <h5 className="footer-heading">HELP</h5>
//           <p>&copy; 2024. All Rights Reserved</p>
//           <p>
//             <a href="#">Privacy</a> | 
//             <a href="#">Terms</a> | 
//             <a href="#">Promo T&Cs Apply</a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsTwitter, BsDribbble, BsBehance, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer bg-light pt-5">
      <Container>
        <Row className="mb-4">
          {/* Logo and Contact Info */}
          <Col md={4}>
            <h2 className="footer-logo">Watch</h2>
            <address className="footer-address">
              Katargam, Surat<br />
              <a href="mailto:amit9577@gmail.com">amit9577@gmail.com</a><br />
              <a href="tel:8238479577">8238479577</a>
            </address>
            <div className="social-icons mt-3">
              <a href="#" className="footer-icon"><BsTwitter /></a>
              <a href="#" className="footer-icon"><BsDribbble /></a>
              <a href="#" className="footer-icon"><BsBehance /></a>
              <a href="#" className="footer-icon"><BsInstagram /></a>
            </div>
          </Col>

          {/* Information Section */}
          <Col md={2}>
            <h5 className="footer-heading">INFORMATION</h5>
            <ul className="list-unstyled">
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Warranty & Authenticity</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Help Section */}
          <Col md={2}>
            <h5 className="footer-heading">HELP</h5>
            <ul className="list-unstyled">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </Col>

          {/* Services Section */}
          <Col md={2}>
            <h5 className="footer-heading">SERVICES</h5>
            <ul className="list-unstyled">
              <li><a href="#">Sale</a></li>
              <li><a href="#">Quick Ship</a></li>
              <li><a href="#">New Designs</a></li>
              <li><a href="#">Protection Plan</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>
          </Col>

          {/* Footer Bottom */}
          <Col md={2}>
            <h5 className="footer-heading">Copy</h5>
            <p className="mb-1">&copy; 2024. All Rights Reserved</p>
            <p className="footer-links">
              <a href="#">Privacy</a> | 
              <a href="#"> Terms</a> | 
              <a href="#"> Promo T&Cs Apply</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
