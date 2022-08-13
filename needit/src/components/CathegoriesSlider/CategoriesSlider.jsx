import React from "react";
import Slider from "react-slick";

import dataSlider from "../ProductSlider/Slider/dataSlider";


import "./categoriesSlider.css"; 
export default function CategorieSlider () {
  // function NextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  
  // function PrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
    const settings = { 
      dots: true,
      // infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />,
        
    };
    return (
      <div className="categories">
        <h2>Categories</h2>
        <Slider {...settings}>
             {dataSlider.map((item) => (
        
          <div className="categorySlider">
            <div className="card">
            <h2>{item.name}</h2>
            <img  className="cardImg" src={item.img} alt={item.name} />
            </div>

          </div>


         ))} 
          
        </Slider>
      </div>
    );
  }

