import React from 'react';

import "./carousel.css";
import Slider from './Slider/Slider';

function Carousel() {
  return (
    <div className='carousel_wrapper'>
       <h1>Categories</h1> 
        <div>
         <Slider/>
        </div>
    </div>
  )
}

export default Carousel