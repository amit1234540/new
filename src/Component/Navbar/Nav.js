import React, { useEffect, useState, useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaSearch, FaUserAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { AiOutlineSwap } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../Home/CartContext';
import { useSelector } from "react-redux";


const CustomNavbar = () => {

  const wishlistItems = useSelector(state => state.wishlist);
  const history = useHistory();

  // add wishlist
  const [dbWishlistCount, setDbWishlistCount] = useState(0);



  const fetchWishlistCount = async () => {
    try {
      const res = await fetch("http://localhost:3000/wishlist/show");
      const data = await res.json();
      setDbWishlistCount(data?.data?.length || 0);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWishlistCount();
  }, [wishlistItems]);

  // const { cartCount } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="py-3">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#" className="fw-bold" style={{ fontSize: '1.5rem' }} onClick={() => history.push("/ ")}>
          Watch
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Links and Icons */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">

            <Nav.Link href="#Home" onClick={() => history.push("/")}>Home</Nav.Link>

            <Nav.Link href="#About" onClick={() => history.push("/About")}>About</Nav.Link>
            {/* <Nav.Link href="#contact">Shop</Nav.Link> */}
            <Nav.Link href="#Shop" onClick={() => history.push("/Shop")}>Shop</Nav.Link>



            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#Blog" onClick={() => history.push("/Blog")}>Blog</Nav.Link>

            <NavDropdown title="Page" id="Page-dropdown">
              <NavDropdown.Item href="#Contact" onClick={() => history.push("/Contact")}>Contact</NavDropdown.Item>

            </NavDropdown>

          </Nav>

          {/* Icons Section */}
          <Nav>
            <Nav.Link href="#search">
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="#account" onClick={() => history.push("/Sign")}>
              <FaUserAlt />
            </Nav.Link>

            <Nav.Link>

              <FaHeart onClick={() => history.push("/Wishlist")} />
              <span className="badge bg-dark text-white position-absolute" style={{ fontSize: '0.7rem', top: '8px', right: '8px' }}  ></span>
            </Nav.Link>
            <Nav.Link href="#cart">
              <FaShoppingCart />
              <span className="badge bg-dark text-white position-absolute" style={{ fontSize: '0.7rem', top: '8px', right: '8px' }}></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;








