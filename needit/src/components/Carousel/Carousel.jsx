import React from 'react';

import "./carousel.css";
import Slider from './Slider/slider';

function Carousel() {
  return (
    <div className='carousel_wrapper'>
       <h1>Categories</h1> 
         <Slider/>
    </div>
  )
}

export default Carousel