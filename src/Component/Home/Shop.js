// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
// import img1 from '../img/product--1-removebg-preview.png';
// import img2 from '../img/product--2-removebg-preview.png';
// import img3 from '../img/product--3-removebg-preview.png';
// import img4 from '../img/product--4-removebg-preview.png';
// import img5 from '../img/product--5-removebg-preview.png';
// import img6 from '../img/product--6-removebg-preview.png';
// import img7 from '../img/product--7-removebg-preview.png';
// import img8 from '../img/product--8-removebg-preview (1).png';
// import Nav from "../Navbar/Nav";


// const products = [
//     { name: 'Oval Watch', price: 120, image: img1 },
//     { name: 'Turquoise Watch', price: 100, image: img2 },
//     { name: 'Marcol Watch', price: 190, image: img3 },
//     { name: 'Calvin Klein Grey', price: 100, image: img4 },
//     { name: 'Casio Watch Tech', price: 110, image: img5 },
//     { name: 'Chronograph Watch', price: 90, image: img6 },
//     { name: 'Citizen Diamond', price: 120, image: img7 },
//     { name: 'Citizen Diamond', price: 120, image: img8 }

//      const [isFilterOpen, setIsFilterOpen] = useState(false);
//       const [products, setProducts] = useState([]);
//       const [sortBy, setSortBy] = useState("");
    
//       const getData = () => {
//         axios
//           .get("http://localhost:3000/show") 
//           .then((response) => {
//             console.log("API Response:", response.data);
    
//             if (Array.isArray(response.data)) {
//               setProducts(response.data);
//             } else {
//               setProducts(response.data.data || []);
//             }
//           })
//           .catch((error) => {
//             console.error("Fetch Error:", error);
//           });
//       };
//      useEffect(() => {
//         getData();
//       }, []);

// ];

// const ShopPage = () => {
//     return (
//         <>
//             {/* Add Nav inside the return */}
//             <Nav />

//             <section className="container shop-product-section py-5">
//                 <div className="text-center mb-4">
//                     <h2>PRODUCT COLLECTION</h2>
//                     <div className="shop-heading-line mx-auto"></div>
//                 </div>

//                 {/* Product Grid */}
//                 <div className="row g-4">
//                     {products.map((product, index) => (
//                         <div className="col-6 col-md-4 col-lg-3" key={index}>
//                             <div className="card product-card h-100 position-relative">
//                                 <img src={product.image} alt={product.name} className="card-img-top img-fluid" />

//                                 <img src={`http://localhost:3000/images/mainimg/${product.img}`} alt="" />
//                                 <div className="card-body text-center">
//                                     <h5 className="card-title">{product.name}</h5>
//                                     <p className="price">${product.price}.00</p>
//                                 </div>
//                                 {/* Hover icons */}
//                                 <div className="hover-icons">
//                                     <a href="#" className="icon">
//                                         <FontAwesomeIcon icon={faShoppingCart} />
//                                     </a>
//                                     <a href="#" className="icon">
//                                         <FontAwesomeIcon icon={faEye} />
//                                     </a>
//                                     <a href="#" className="icon">
//                                         <FontAwesomeIcon icon={faHeart} />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </>
//     );
// };

// export default ShopPage;









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
      .get(`http://localhost:3000/show?category=women`) 
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



































// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import Nav from "../Navbar/Nav";
// import { useHistory,useParams } from "react-router-dom";


// const ShopPage = () => {
//   const history = useHistory();
//   const params = useParams(); // ✅ define params

//   // aa vastu che admin side thi from mathi img upload karvi ke shop vala page ma img show thavi pade eni mate nu che

//   const [products, setProducts] = useState([]); 
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [sortBy, setSortBy] = useState("");
//    const [getdata, setdata] = useState([]);
  



//   const getData = () => {
//     axios
//       .get("http://localhost:3000/show?category=Shop")
//       .then((response) => {
//         console.log("API Response:", response.data);

//         if (Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           setProducts(response.data.data || []);
//         }
//       })
//       .catch((error) => {
//         console.error("Fetch Error:", error);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

  


//   // Fetch product by ID if route has :id single data mate che aa code single page mate no code show
//     useEffect(() => {
//       if (params.id) {
//         axios
//           .get(`http://localhost:3000/findbyid/?id=${params.id}`)
//           .then((res) => {
//             if (res.data?.data?.length > 0) {
//               setdata(res.data.data[0]);
//             } else {
//               setdata(null);
//             }
//           })
//           .catch((error) => {
//             console.log(error.message);
//             setdata(null);
//           });
//       }
//     }, [params.id]);
  
//     const goToProduct = (id) => {
//       history.push(`/Productdetails/${id}`);
//     };

  
//   return (
//     <>
//       {/* Navbar */}
//       <Nav />

//       <section className="container shop-product-section py-5">
//         <div className="text-center mb-4">
//           <h2>PRODUCT COLLECTION</h2>
//           <div className="shop-heading-line mx-auto"></div>
//         </div>

//         {/* Product Grid */}
//         <div className="row g-4">
//           {products.map((product, index) => (
//             <div className="col-6 col-md-4 col-lg-3" key={index}>
//               <div className="card product-card h-100 position-relative">
//                 <img
//                   src={`http://localhost:3000/images/mainimg/${product.img}`}
//                   alt={product.name}
//                   className="card-img-top img-fluid"
//                   // single id mate no code 
//                    onClick={() => goToProduct(product._id)} // ✅ navigate
//                 />

                
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="price">${product.price}.00</p>
//                 </div>

//                 {/* Hover icons */}
//                 <div className="hover-icons">
//                   <a href="#" className="icon">
//                     <FontAwesomeIcon icon={faShoppingCart} />
//                   </a>
//                   <a href="#" className="icon">
//                   {/* single id mate nu che */}
//                     <FontAwesomeIcon icon={faEye}  onClick={() => goToProduct(product._id)}  />
//                   </a>
//                   <a href="#" className="icon">
//                     <FontAwesomeIcon icon={faHeart} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ShopPage;



