


import React, { useState, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaEye, FaRetweet } from "react-icons/fa";
import { useHistory,useParams } from "react-router-dom";
import Nav from "../Navbar/Nav";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const params = useParams(); // ✅ define params
  const [getdata, setdata] = useState([]);

  // Fetch only Men products
  const getData = () => {
    axios
      .get(`http://localhost:3000/show?category=MenWatch`) 
      .then((response) => {
        console.log("API Response:", response.data);
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setProducts(response.data.data || []);
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      }); 
  };

  // Fetch once on mount
  useEffect(() => {
    getData();
  }, []);

  // const goToProduct = (id) => {
  //   history.push(`/MenWatch/${id}`);
  // };

   const goToProduct = (id) => {
    history.push(`/Productdetails/${id}`);
  };
  

    // Fetch product by ID if route has :id single data mate che
  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://localhost:3000/findbyid/?id=${params.id}`)
        .then((res) => {
          if (res.data?.data?.length > 0) {
            setdata(res.data.data[0]);
          } else {
            setdata(null);
          }
        })
        .catch((error) => {
          console.log(error.message);
          setdata(null);
        });
    }
  }, [params.id]);

 

  return (
    <>
      <Nav />

      <section className="container-fluid mt-4">
        <div className="container">
          <div className="row g-4">
            {products.length === 0 && <p className="text-center">No products found</p>}
            {products.map((product) => (
              <div className="col-md-4 col-lg-3" key={product._id}>
                <div className="card">
                  <div className="product-card home-product text-center">
                    <img
                      src={`http://localhost:3000/images/mainimg/${product.img}`}
                      alt={product.productTitle || product.name}
                      onClick={() => goToProduct(product._id)}
                      style={{ cursor: "pointer", width: "100%", height: "250px", objectFit: "cover" }}
                    />
                    <div className="overlay">
                      <div className="home-prod-icons">
                        <a href="#" className="home-prod-icon"><CiShoppingCart /></a>
                        {/* jyre hu card uper click karu eni mate perticullay id vas mate  */}
                        <a href="#" className="home-prod-icon" onClick={() => goToProduct(product._id)}><FaEye /></a>
                        
                        <a href="#" className="home-prod-icon"><FaRetweet /></a>
                      </div>
                    </div>
                  </div>

                  <div className="content text-center p-2">
                    <h5 className="mt-3">{product.productTitle || product.name}</h5>
                    <div className="price mb-3">
                      <span className="fw-bold">${product.currentPrice}</span>{" "}
                      <span className="text-decoration-line-through text-danger">${product.oldPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;















