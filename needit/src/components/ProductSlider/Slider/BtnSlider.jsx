import React from 'react';
// import "./Slider.css";
import leftArrow from "../img/back-to.png";
import rightArrow from "../img/next-page.png";

export default function BtnSlider({direction, moveSlide}) {


    return (
        <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <img
                src={direction === "next" ? rightArrow : leftArrow} 
                alt="" 
            />
        </button>
    )
};