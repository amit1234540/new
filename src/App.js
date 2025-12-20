import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Nav from "./Component/Navbar/Nav";
import Sign from "./Component/Navbar/Sign";
import Login from "./Component/Navbar/Login";
import Home from "./Component/Home/Home";
import About from "./Component/Home/About";
import Shop from "./Component/Home/Shop";
import Blog from "./Component/Home/Blog";
import Contact from "./Component/Home/Contact";
import MenWatch from "./Component/Home/MenWatch";
import Grilwatch from "./Component/Home/Grilwatch";
import Mainwatch from "./Component/Home/Mainwatch";
import Footer from "./Component/Footer/Footer";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "bootstrap/dist/css/bootstrap.min.css";
import { InfinitySpin } from "react-loader-spinner";

import Product from "./Component/Home/Product";

import Productdetails from "./Component/Home/Productdetails";

import Wishlist from "./Component/Home/Wishlist";







function App() {
  const [cart, setCart] = useState([]); // useState goes before JSX return
  const [loading, setLoading] = useState(false); // useState goes before JSX return

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleClick = (item) => {
    console.log(item);
  };

  return (
    <div className="App">
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            background: "white",
          }}
        >
          <InfinitySpin
            visible={true}
            width="200"
            color="#000000"
            ariaLabel="infinity-spin-loading"
          />
          <div className="spinner" style={{ color: "white" }}>
            Loading...
          </div>
        </div>
      ) : (
        <Router>
        
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Sign">
              <Sign />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>

            {/* tamare admin id tamre khali particulay ani img show thay eni mate nu che */}
            <Route exact path="/Shop" component={Shop}>
              <Shop />
            </Route>
            <Route exact path="/Blog">
              <Blog />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Mainwatch">
              <Mainwatch />
            </Route>
              {/* tamare admin id tamre khali particulay ani img show thay eni mate nu che */}
            <Route exact path="/MenWatch" component={MenWatch}>
              <MenWatch />
            </Route>
            <Route exact path="/Grilwatch">
              <Grilwatch />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>

            <Route exact path="/Productdetails/:id" >
              <Productdetails />
            </Route>

            


            <Route exact path="/Product/:id ">
              <Product />
            </Route>

            {/* Add to card */}

              <Route exact path="/Wishlist">
              <Wishlist />
            </Route>


          </Switch>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;




