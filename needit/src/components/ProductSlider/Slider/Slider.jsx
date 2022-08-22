import React, { useState } from 'react';

import  "./slider.css";

//components
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

export default function Slider() {

//   const[slideIndex, setSlideIndex] = useState([])

//   const nextSlide = () => {
//     if(slideIndex !== dataSlider.length){
//         setSlideIndex(slideIndex + 1)
//     } else if (slideIndex === dataSlider.length){
//         setSlideIndex(1)
//     }
//   }
  
//   const prevSlide = () => {
// if (slideIndex !== 1) {
//     setSlideIndex(slideIndex - 1)
// } else if (slideIndex === 1){
//    setSlideIndex(dataSlider.length)
// }
//   }
    return (
        <div className="container-slider">
            {dataSlider.map((item) => (
        
        <div className="categorySlider" key={item.id}>
          <div className="cardText" >
          <h2>{item.name}</h2>
          <img  className="cardImg" src={item.img} alt={item.name} />
          </div>
        </div>
       ))}
      {/* <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
      <BtnSlider moveSlide={nextSlide} direction={"next"}/>
   */}
        
        </div>
    )
}