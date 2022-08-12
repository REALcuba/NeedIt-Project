import React from 'react';

import "./carousel.css";
import Slider from './Slider/slider';

function Carousel() {
  return (
    <div className='carousel_wrapper'>
       <Slider/>
       <h1>Categories</h1>  
    </div>
  )
}

export default Carousel