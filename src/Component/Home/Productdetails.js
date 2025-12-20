
  import React, { useEffect, useState } from "react";
  import { useParams, useHistory } from "react-router-dom";
  import axios from "axios";
  import Nav from "../Navbar/Nav";
  import { addToCart, addToWishlist } from "../Home/Store";
  import { useDispatch } from "react-redux";

  function ProductDetails() {
    const { id } = useParams();
    const history = useHistory();

    const [product, setProduct] = useState(null);
    const [mainImg, setMainImg] = useState("");
    const [quantity, setQuantity] = useState(1);

// add to card
    const params = useParams();

     const dispatch = useDispatch();


    //  Add to card wishlist

      const handleAddToWishlist = async (product) => {
  const productData = { ...product };

  
  dispatch(addToCart(productData));
  dispatch(addToWishlist(productData));

  try {
    await axios.post("http://localhost:3000/wishlist/create", {
      name: productData.name,                        // 👈 product name
      price: productData.price,                      // 👈 product price
      cartimage: productData.img,                    // 👈 main image
      quantity: 1,                                   // 👈 default quantity
      productId: productData._id                     // 👈 optional reference
    });

    console.log("Added to bag successfully");
  } catch (err) {
    console.error("Failed to add to bag:", err.response?.data || err.message);
  }
};


// single data mate 


    useEffect(() => {
      axios
        .get(`http://localhost:3000/findbyid/?id=${id}`)
        .then((res) => {
          let data = res.data.data;
          if (Array.isArray(data)) {
            data = data[0];
          }
          if (data) {
            setProduct(data);
            const firstImg = [data.img, data.img2, data.img3, data.img4].filter(Boolean)[0];
            setMainImg(firstImg || "");
          }
        })
        .catch((err) => console.error(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    const increaseQty = () => setQuantity((q) => q + 1);
    const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

    return (
      <>
        {/* ✅ Navbar should be rendered here */}
        <Nav />

        <div className="product-page">
          {/* Thumbnail Gallery */}
          <div className="thumb-gallery">
            {[product.img, product.img2, product.img3, product.img4]
              .filter(Boolean)
              .slice(0, 3)
              .map((img, index) => (
                <img
                  key={index}
                  src={`http://localhost:3000/images/mainimg/${img}`}
                  alt="watch-thumbnail"
                  className={mainImg === img ? "active" : ""}
                  onClick={() => setMainImg(img)}
                />
              ))}
          </div>

          {/* Main Image */}
          <div className="product-image">
            <img
              src={`http://localhost:3000/images/mainimg/${mainImg}`}
              alt={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="product-info">
            <button className="back-btn" onClick={() => history.goBack()}>
              ← Back
            </button>

            <h2 className="product-title">{product.name}</h2>
            <p className="product-type">{product.category || "EDP | Woody"}</p>

            <div className="price-box">
              <span className="old-price">${product.oldPrice || "400.00"}</span>
              <span className="product-price">${product.price}</span>
              <span className="discount">-13%</span>
            </div>

            {/* Quantity Control */}
            <div className="quantity-control">
              <button onClick={decreaseQty}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQty}>+</button>
            </div>

            {/* Action Buttons */}
            <div className="action-btns">
              <button className="add-btn" onClick={() => handleAddToWishlist(product)}>ADD TO CART</button>
              <button className="buy-btn">BUY NOW</button>
            </div>

            {/* Accordion Section */}
            <div className="accordion">
              <details>
                <summary>PRODUCT DESCRIPTION</summary>
                <p>{product.description}</p>
              </details>
              <details>
                <summary>NOTES & INGREDIENTS</summary>
                <p>{product.ingredients || "Top notes, middle notes, base notes"}</p>
              </details>
            </div>

            {/* Extra Info */}
            <div className="extra-info">
              <p>
                <strong>SKU:</strong> {product.sku || "D1110"}
              </p>
              <p>
                <strong>Categories:</strong> {product.category || "Watches"}
              </p>
              <p>
                <strong>Brand:</strong> {product.brand || "Brand 2"}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default ProductDetails;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// function ProductTable() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [editProduct, setEditProduct] = useState(null);

//   const getData = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/show");
//       if (Array.isArray(response.data?.data)) {
//         setData(response.data.data);
//       } else if (Array.isArray(response.data)) {
//         setData(response.data);
//       } else {
//         setData([]);
//       }
//     } catch (error) {
//       console.error(error);
//       setData([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`http://localhost:3000/delete/${id}`);
//       alert("Product deleted successfully!");
//       getData();
//     } catch (error) {
//       console.error(error);
//       alert("Failed to delete product");
//     }
//   };

//   const handleEditClick = (product) => setEditProduct(product);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:3000/update/${editProduct._id}`, editProduct);
//       alert("Product updated successfully!");
//       setEditProduct(null);
//       getData();
//       window.bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update product");
//     }
//   };

//   if (loading) return <div className="text-center mt-4">Loading products...</div>;

//   return (
//     <div className="container mt-4">
//       <h3 className="mb-3 text-center">All Products</h3>
//       <table className="table table-bordered table-hover table-striped align-middle text-center">
//         <thead className="table-dark">
//           <tr>
//             <th>Sr No.</th>
//             <th>Product Name</th>
//             <th>Price</th>
//             <th>Image</th>
//             <th>Category</th>
//             <th>Action</th> {/* ✅ Action column */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((item, index) => (
//               <tr key={item._id || index}>
//                 <td>{index + 1}</td>
//                 <td>{item.name || "N/A"}</td>
//                 <td>₹{item.price || "0"}</td>
//                 <td>
//                   {item.img ? (
//                     <img
//                       src={`http://localhost:3000/images/mainimg/${item.img}`}
//                       alt={item.name}
//                       width="70"
//                       height="70"
//                       style={{ objectFit: "cover", borderRadius: "8px", cursor: "pointer" }}
//                       onClick={() => setSelectedImage(item.img)}
//                       data-bs-toggle="modal"
//                       data-bs-target="#imageModal"
//                     />
//                   ) : (
//                     <span>No Image</span>
//                   )}
//                 </td>
//                 <td>{item.category || "N/A"}</td>
//                 <td>
//                   <button
//                     className="btn btn-sm btn-primary me-2"
//                     data-bs-toggle="modal"
//                     data-bs-target="#editModal"
//                     onClick={() => handleEditClick(item)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-sm btn-danger"
//                     onClick={() => handleDelete(item._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">No Products Found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Image Modal */}
//       <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Product Image</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//             </div>
//             <div className="modal-body text-center">
//               {selectedImage && (
//                 <img
//                   src={`http://localhost:3000/images/mainimg/${selectedImage}`}
//                   alt="Full Product"
//                   className="img-fluid rounded shadow"
//                   style={{ maxHeight: "500px", objectFit: "contain" }}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Edit Modal */}
//       <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <form onSubmit={handleUpdate}>
//               <div className="modal-header">
//                 <h5 className="modal-title">Edit Product</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//               </div>
//               <div className="modal-body">
//                 {editProduct && (
//                   <>
//                     <div className="mb-3">
//                       <label className="form-label">Name</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         value={editProduct.name}
//                         onChange={(e) =>
//                           setEditProduct({ ...editProduct, name: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Price</label>
//                       <input
//                         type="number"
//                         className="form-control"
//                         value={editProduct.price}
//                         onChange={(e) =>
//                           setEditProduct({ ...editProduct, price: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Category</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         value={editProduct.category}
//                         onChange={(e) =>
//                           setEditProduct({ ...editProduct, category: e.target.value })
//                         }
//                       />
//                     </div>
//                   </>
//                 )}
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-success">
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductTable;


