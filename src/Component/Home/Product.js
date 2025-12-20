




  
import React, { useState, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaEye, FaRetweet } from "react-icons/fa";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom"; 

const Product = () => {
  const history = useHistory();
  const params = useParams(); // ✅ define params

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [getdata, setdata] = useState([]);

  // Fetch all products admin mate
  const getData = async () => {
     
      try {
            const res = await  axios.get("http://localhost:3000/show?category=all");
            setProducts(res.data.data);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
  };

  useEffect(() => {
    getData();
  }, []);

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

  const goToProduct = (id) => {
    history.push(`/Productdetails/${id}`);
  };

  return (
    <section className="container-fluid">
      <div className="container mt-5">
        <div>
          <h2 className="text-center">TOP CATEGORIES</h2>
          <hr
            className="mx-auto"
            style={{ width: "20%", borderBottom: "2px solid black" }}
          />
          <p className="text-center">Lorem ipsum, dolor sit amet conse ctetu.</p>
        </div>

        <div className="row mt-5 g-5">
          {products.map((product, index) => (
            <div className="col-md-4 col-lg-3" key={index}>
              <div className="card">
                <div className="product-card home-product text-center ">

                {/* admin mate img mate */}
                  <img
                    src={`http://localhost:3000/images/mainimg/${product.img}`}
                    className="main-img"
                    alt={product.name}
                    onClick={() => goToProduct(product._id)} // ✅ navigate
                  />
                  <div className="overlay">
                    <div className="home-prod-icons">
                      <a href="#" className="home-prod-icon">
                        <CiShoppingCart />
                      </a>

                      {/* jyre hu card uper click karu eni mate perticullay id vas mate  */}
                      <a
                        href="#"
                        className="home-prod-icon"
                        onClick={() => goToProduct(product._id)} 
                      >
                        <FaEye />
                      </a>
                      <a href="#" className="home-prod-icon">
                        <FaRetweet />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <h4 className="mt-3 text-center">
                    <a href="#" className="text-dark text-decoration-none">
                      {product.name}
                    </a>
                  </h4>
                </div>

                <div className="price text-center mb-5">
                  <span>${product.price} - </span>
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
  );
};

export default Product;





 
