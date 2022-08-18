import React, { useState } from 'react';

import  "./slider.css";

//components
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

//import product slider img
import furniture from "../img/furniture.jpeg"

export default function Slider() {

  const[slideIndex, setSlideIndex] = useState([1,2,3,])

  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
        setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length){
        setSlideIndex(1)
    }
  }
  
  const prevSlide = () => {
if (slideIndex !== 1) {
    setSlideIndex(slideIndex - 1)
} else if (slideIndex === 1){
   setSlideIndex(dataSlider.length)
}
  }
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return(
                    <div 
                    
                    key={obj.id}
                    className={slideIndex === obj.id ? "slide active-anim" : "slide"}
                         >
                        <img 
<<<<<<< HEAD:needit/src/components/Carousel/Slider/slider.jsx
                        src={obj.picture}alt=""
=======
                        src={furniture}
                        alt=""
>>>>>>> origin/angel:needit/src/components/ProductSlider/Slider/Slider.jsx
                        />
                    </div>)
})}
             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
             <BtnSlider moveSlide={nextSlide} direction={"next"}/>
  
     
        </div>
    )
}