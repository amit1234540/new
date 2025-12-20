





import React, { useEffect, useState } from "react";
import { Button, Container, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import Nav from "../Navbar/Nav";

function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlist = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/wishlist/show");
      setWishlistItems((res.data.data || []).map(item => ({
        ...item,
        quantity: item.quantity || 1,
        cartimage: item.cartimage,
        name: item.name,
        price: Number(item.price) || 0,
      })));
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.get(`http://localhost:3000/delete/?id=${id}`, {
        headers: { token },
      });
      fetchWishlist();
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  // Increment quantity
  const handleIncrement = (id) => {
    setWishlistItems(prev =>
      prev.map(item =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity (cannot go below 1)
  const handleDecrement = (id) => {
    setWishlistItems(prev =>
      prev.map(item =>
        item._id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const grandTotal = wishlistItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (loading) return (
    <Container className="py-5 text-center">
      <Spinner animation="border" /> Loading...
    </Container>
  );

  return (
    <>
    <Nav />
    <Container className="py-5 wishlist-table">
      <h2 className="mb-4 text-center fw-bold">💖 My Wishlist</h2>

      {wishlistItems.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map(item => (
              <tr key={item._id}>
                <td>
                  <img
                    src={`http://localhost:3000/images/mainimg/${item.cartimage}`}
                    alt={item.name}
                    style={{ width: 60, height: 60, objectFit: "cover" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleDecrement(item._id)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleIncrement(item._id)}
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td className="fw-bold text-primary">₹{item.price * item.quantity}</td>
                <td>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : <p className="text-center mt-4">🚫 Your wishlist is empty!</p>}

      {wishlistItems.length > 0 && (
        <div className="mt-3 text-end fw-bold fs-5">
          Grand Total: <span className="text-success">₹{grandTotal}</span>
        </div>
      )}
    </Container>
    </>
  );
}

export default WishlistPage;



