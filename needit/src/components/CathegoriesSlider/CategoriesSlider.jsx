import React from "react";
// import Slider from "react-slick";

// import dataSlider from "../ProductSlider/Slider/dataSlider";


import "./categoriesSlider.css"; 
import Slider from "../ProductSlider/Slider/Slider";

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
      centerPadding: "60px",
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />,
        
    };
    return (
      <div className="categories">
        <h2>Categories</h2>
        
        <Slider/>
      </div>
    );
  }

