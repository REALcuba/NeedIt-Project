import React from "react";
import Slider from "react-slick";

import dataSlider from "../ProductSlider/Slider/dataSlider";


import "./categoriesSlider.css"; 


//using react-slick to create the Slider

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
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      // c
      centerPadding: "60px",
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />,
        
    };
    return (
      <div className="categories">
        <h2>Categories</h2>
        <Slider {...settings}>
             {dataSlider.map((item) => (
        
          <div className="categorySlider" key={Slider}>
            <div className="card" >
            <h2>{item.name}</h2>
            </div>
            <img  className="cardImg" src={item.img} alt={item.name} />
          </div>
         ))} 
          
        </Slider>
      </div>
    );
  }

