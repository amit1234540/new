// import React from "react";
// import img1 from '../img/brand1.png';
// import img2 from '../img/brand2.png';
// import img3 from '../img/brand3.png';
// import img4 from '../img/brand4.png';
// import img5 from '../img/brand--5.png';
// import img6 from '../img/brand6.png';

// const WatchLogos = () => {
//   return (
//     <div className="container text-center">
//       <div className="row">
//         <div className="col-md-2 watch-logo">
//           <img src={img1} alt="Timeless" />
//         </div>
//         <div className="col-md-2 watch-logo">
//           <img src={img2} alt="Finest Watches" />
//         </div>
//         <div className="col-md-2 watch-logo">
//           <img src={img3} alt="Watch Shop" />
//         </div>
//         <div className="col-md-2 watch-logo">
//           <img src={img4} alt="Watches Premium" />
//         </div>
//         <div className="col-md-2 watch-logo">
//           <img src={img5} alt="Watch Collector Society" />
//         </div>
//         <div className="col-md-2 watch-logo">
//           <img src={img6} alt="Watches Premium" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WatchLogos;



import React from "react";
import img1 from '../img/brand1.png';
import img2 from '../img/brand2.png';
import img3 from '../img/brand3.png';
import img4 from '../img/brand4.png';
import img5 from '../img/brand--5.png';
import img6 from '../img/brand6.png';


const WatchLogos = () => {
  const logos = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="watch-marquee-container">
      <div className="watch-marquee">
        {logos.concat(logos).map((logo, index) => (
          <div className="watch-logo" key={index}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchLogos;
