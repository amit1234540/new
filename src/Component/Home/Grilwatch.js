import React from "react";
import img1 from "../productimg/product--1-removebg-preview.png";
import img2 from "../productimg/product--2-removebg-preview.png";
import img3 from "../productimg/product--3-removebg-preview.png";
import img4 from "../productimg/product--4-removebg-preview.png";
import img5 from "../productimg/product--5-removebg-preview.png";
import img6 from "../productimg/product--6-removebg-preview.png";
import img7 from "../productimg/product--7-removebg-preview.png";
import img8 from "../productimg/product--8-removebg-preview.png";
import { CiShoppingCart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";

const Product = () => {
  const ProductData = [
    {
      image: img1,
      productTitle: "Cluse Minuit",
      curentPrice: 120,
      oldPrice: 150,
    },
    {
      image: img2,
      productTitle: "Cluse Minuit",
      curentPrice: 599,
      oldPrice: 899,
    },
    {
      image: img3,
      productTitle: "Cluse Minuit",
      curentPrice: 499,
      oldPrice: 999,
    },
    {
      image: img4,
      productTitle: "Cluse Minuit",
      curentPrice: 599,
      oldPrice: 899,
    },
    {
      image: img5,
      productTitle: "Cluse Minuit",
      curentPrice: 499,
      oldPrice: 799,
    },
    {
      image: img6,
      productTitle: "Cluse Minuit",
      curentPrice: 399,
      oldPrice: 699,
    },
    {
      image: img7,
      productTitle: "Cluse Minuit",
      curentPrice: 120,
      oldPrice: 150,
    },
    {
      image: img8,
      productTitle: "Cluse Minuit",
      curentPrice: 100,
      oldPrice: 150,
    },
  ];
  return (
    <>
      <section className="container-fluid">
        <div className=" container mt-5">
          
          <div className="row mt-5 g-5">
            {ProductData.map((product, index) => (
              <div className=" col-md-4 col-md-4 col-lg-3" key={index}>
                <div className="card">
                  <div className="product-card home-product text-center ">
                    <img src={product.image} alt="product-img" />
                    <div className="overlay">
                      <div className="home-prod-icons">
                        {/* <a href="" className='home-prod-icon'> <i className='fa fa-shopping-cart'></i> </a>
                                                    <a href="" className='home-prod-icon'> <i className='fa fa-eye'></i></a>
                                                    <a href="" className='home-prod-icon'> <i className='fa fa-retweet'></i></a> */}

                        <a href="" className="home-prod-icon">
                          <CiShoppingCart />
                        </a>
                        <a href="#" className="home-prod-icon">
                          <FaEye />
                        </a>
                        <a href="#" className="home-prod-icon">
                          <FaRetweet />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="content">
                      <h4 className="mt-3 text-center">
                        <a href="" className="text-dark text-decoration-none ">
                          {product.productTitle}
                        </a>
                      </h4>
                    </div>

                    <div className="price text-center mb-5">
                      <span>${product.curentPrice} - </span>
                      <span className="text-decoration-line-through text-danger">
                        ${product.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-container">
        <div className="marquee">
          <div className="marquee-content">
            <span>Buy 2 Get 1 Free 😍 </span>
            <span>No Coupon Code Required 😍</span>
            <span>Buy 2 Get 1 Free 😍 </span>
            <span>🚚 FREE DELIVERY </span>
            <span>🛠️ 24/7 SUPPORT </span>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Product;
