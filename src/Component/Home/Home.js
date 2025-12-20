import React from 'react';
import Carousel from "../Home/Carousel";
import Product from "../Home/Product";
import Section from "../Home/Section";
import TopProduct from './TopProduct';
import Men from './Men';
import Review from './Review';
import Feature from './Feature';
import Watchlogo from './Watchlogo';

import Backtopbutton from './Backtopbutton';
import Mousecursor from './Mousecursor';
import Nav from '../Navbar/Nav';





function Home() {
  return (
    <div>
    <Nav/>
      <Carousel/>
      <Product />
      <Section/>
      <TopProduct/>
      <Men/>
      <Review/>
      <Feature/>
      <Watchlogo/>
     
      <Backtopbutton/>
      <Mousecursor/>
      

    </div>
  )
}

export default Home
