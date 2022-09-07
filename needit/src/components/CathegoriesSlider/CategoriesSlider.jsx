import React from "react";
import { productdb } from "../ProductPage/productdb";

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
  
    return (
      <div className="categories container-fluid">
        <h2 className="display-1">Categories</h2>
        <div>{productdb.map(item => {
            return <div><ul><li>{item}</li></ul></div>
          })}</div>
        
        <Slider/>
      </div>
    );
  }

