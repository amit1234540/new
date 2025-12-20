    // import React from 'react';
    // import { Carousel, Button } from 'react-bootstrap';
    // import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
    // import img1 from '../img/silde1.jpg';  // Replace with your image paths
    // import img2 from '../img/slider2.jpg';
    // import img3 from '../img/slider3.jpg';

    // const CustomCarousel = () => {
    //   return (
    //     <Carousel
    //       prevIcon={<FaChevronLeft className="carousel-control-prev-icon" />}
    //       nextIcon={<FaChevronRight className="carousel-control-next-icon" />}
    //     >
    //       {/* Slide 1 */}
    //       <Carousel.Item>
    //         <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center" style={{ minHeight: '600px' }}>
    //           <div className="text-center text-content">
    //             <h5 className="text-muted">Smart Products</h5>
    //             <h1 className="fw-bold">Winter Offer</h1>
    //             <h1>2022 Collection</h1>
    //             <Button variant="outline-dark" className="mt-3">Shop Now</Button>
    //           </div>
    //           <div className="image-content">
    //             <img
    //               className="d-block img-fluid w-100"
    //               src={img1}
    //               alt="First slide"
    //             />
    //           </div>
    //         </div>
    //       </Carousel.Item>

    //       {/* Slide 2 */}
    //       <Carousel.Item>
    //         <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center" style={{ minHeight: '600px' }}>
    //           <div className="text-center text-content">
    //             <h5 className="text-muted">Exclusive Deals</h5>
    //             <h1 className="fw-bold">Summer Sale</h1>
    //             <h1>2022 Collection</h1>
    //             <Button variant="outline-dark" className="mt-3">Explore</Button>
    //           </div>
    //           <div className="image-content">
    //             <img
    //               className="d-block img-fluid w-100"
    //               src={img2}
    //               alt="Second slide"
    //             />
    //           </div>
    //         </div>
    //       </Carousel.Item>

    //       {/* Slide 3 */}
    //       <Carousel.Item>
    //         <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center" style={{ minHeight: '600px' }}>
    //           <div className="text-center text-content">
    //             <h5 className="text-muted">New Arrivals</h5>
    //             <h1 className="fw-bold">Autumn Collection</h1>
    //             <h1>2022 Fashion</h1>
    //             <Button variant="outline-dark" className="mt-3">Discover</Button>
    //           </div>
    //           <div className="image-content">
    //             <img
    //               className="d-block img-fluid w-100"
    //               src={img3}
    //               alt="Third slide"
    //             />
    //           </div>
    //         </div>
    //       </Carousel.Item>
    //     </Carousel>
    //   );
    // };

    // export default CustomCarousel;






    import React from 'react';
    import { Carousel, Button } from 'react-bootstrap';
    import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
    import img1 from '../img/silde1.jpg';  // Replace with your image paths
    import img2 from '../img/slider2.jpg';
    import img3 from '../img/slider3.jpg';

    const CustomCarousel = () => {
    return (
        <Carousel
        prevIcon={<FaChevronLeft className="carousel-control-prev-icon" />}
        nextIcon={<FaChevronRight className="carousel-control-next-icon" />}
        className="custom-carousel"
        >
        {/* Slide 1 */}
        <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption className="carousel-caption-custom">
            <h5>TIMLESS & ELEGANT</h5>
            <h1 className="fw-bold">BEST SELLER</h1>
            <p>Complete your everyday look with a classic leather strap watch.</p>
            <Button variant="outline-light" className="mt-3">SHOP NOW</Button>
            </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption className="carousel-caption-custom">
            <h5>LUXURY & MODERN</h5>
            <h1 className="fw-bold">NEW ARRIVALS</h1>
            <p>Discover our latest collection with modern accessories.</p>
            <Button variant="outline-light" className="mt-3">EXPLORE</Button>
            </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption className="carousel-caption-custom">
            <h5>EXCLUSIVE & LIMITED</h5>
            <h1 className="fw-bold">SPECIAL EDITION</h1>
            <p>Unveil the limited edition styles with a timeless appeal.</p>
            <Button variant="outline-light" className="mt-3">DISCOVER</Button>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
    };

    export default CustomCarousel;
