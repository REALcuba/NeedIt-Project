import React from "react";

import "./slider.css";

//components
import dataSlider from "./dataSlider";
import { Link } from "react-router-dom";
// import BtnSlider from "./BtnSlider";

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
  const handleClick = (e)=>{
    console.log(e,"click to category");
  }
  return (
  
    <div className=" container-slider container-fluid justify-content-around row">
      {dataSlider.map((item) => (
       <div className="col-sm " key={item.id} onClick={(e)=>handleClick(e)}>
         <Link to="/"> 

          <div >
            <h2 className="display-5">{item.name}</h2>
            <img className="cardImg img-thumbnail " src={item.img} alt={item.name} />
          </div>
          </Link> 
        </div>
  
      ))}
      
      {/* <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
      <BtnSlider moveSlide={nextSlide} direction={"next"}/>
   */}
    </div>
  );
}
