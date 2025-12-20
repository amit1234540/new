

// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import img1 from "../Topproductimg/topproduct-1-removebg-preview.png";
// import img2 from "../Topproductimg/topproduct-2-removebg-preview.png";
// import img3 from "../Topproductimg/topproduct-3-removebg-preview (1).png";
// import img4 from "../Topproductimg/topproduct-4-removebg-preview.png";
// import img5 from "../Topproductimg/topproduct-5-removebg-preview.png";
// import img6 from "../Topproductimg/topproduct-6-removebg-preview.png";
// import img7 from "../Topproductimg/topproduct-7-removebg-preview.png";
// import img8 from "../Topproductimg/topproduct-8-removebg-preview.png";
// import img9 from "../Topproductimg/topproduct-9-removebg-preview.png";


// const products = [
//   {
//     title: "Featured Products",
//     items: [
//       { name: "Marco's Women’s Watch", price: "$100.00", img: img1 },
//       { name: "Round Face Watch", price: "$110.00", img: img2 },
//       { name: "Watch Boxy (Mini)", price: "$99.00", img: img3 },
//     ],
//   },
//   {
//     title: "Onsale Products",
//     items: [
//       { name: "Men’s Watch", price: "$100.00", img: img4 },
//       { name: "Solar Watch", price: "$150.00", img: img5 },
//       { name: "Metal Watch", price: "$140.00", img: img6 },
//     ],
//   },
//   {
//     title: "Onsale Products",
//     items: [
//       { name: "Oval Watch", price: "$120.00", img: img7 },
//       { name: "Turquoise Watch", price: "$100.00", img: img8 },
//       { name: "Marco's Women’s Watch", price: "$100.00", img: img9 },
//     ],
//   },

//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [productss, setProducts] = useState([]);
//   const [sortBy, setSortBy] = useState("");

//   const getData = () => {
//     axios
//       .get("http://localhost:3000/show") 
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
//  useEffect(() => {
//     getData();
//   }, []);


// ];




// function TopProduct() {
//   return (
//     <Container className="product-section">
//       <div>
//         <h2 className='text-center'>Best Seller</h2>
//         <hr className='  mx-auto' style={{ width: '20%', borderBottom: '2px solid black' }} />
//         <p className='text-center'>Lorem ipsum, dolor sit amet conse ctetu.</p>
//       </div>
//       <Row>
//         {products.map((category, idx) => (
//           <Col key={idx} lg={4} md={6} sm={12}>
//             <h2 className="category-title text-center">{category.title}</h2> 
//             {category.items.map((item, idx) => (
//               <Card className="product-card text-center" key={idx}> 
//                 {/* <Card.Img variant="top" src={item.img} alt={item.name} /> */}
//                 {`http://localhost:3000/images/mainimg/${productss.img}`}
//                 <Card.Body>
//                   <Card.Title>{item.name}</Card.Title>
//                   <Card.Text className="product-price">{item.price}</Card.Text>
//                 </Card.Body>
//               </Card>
//             ))}
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default TopProduct;





import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function TopProduct() {
  const [products, setProducts] = useState([]);

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

  return (
    <Container className="product-section">
      <div>
        <h2 className="text-center">Best Seller</h2>
        <hr
          className="mx-auto"
          style={{ width: "20%", borderBottom: "2px solid black" }}
        />
        <p className="text-center">Lorem ipsum, dolor sit amet conse ctetu.</p>
      </div>

      <Row>
        {products.map((item, idx) => (
          <Col key={idx} lg={4} md={6} sm={12}>
            <Card className="product-card text-center">
              <Card.Img
                variant="top"
                src={`http://localhost:3000/images/mainimg/${item.img}`}
                alt={item.name}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="product-price">
                  ${item.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TopProduct;

