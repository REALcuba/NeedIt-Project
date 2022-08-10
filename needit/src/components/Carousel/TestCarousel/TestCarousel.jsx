import React from "react";
import Slider from "react-slick";

import dataSlider from "../Slider/dataSlider";
// import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./testCarousel.css"; 
export default function CathegorieSlider () {
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <h2>Cathegories</h2>
        <Slider {...settings}>
            {dataSlider.map((item) => (
        
          <div >
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

