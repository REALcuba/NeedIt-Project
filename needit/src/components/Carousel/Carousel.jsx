import React from 'react';

import "./carousel.css";
import Slider from './Slider/Slider';

function Carousel() {
  return (
    <div className='carousel_wrapper'>
        <div>
       <h1>Categories</h1> 
        </div>
        <div>
         <Slider/>
        </div>
    </div>
  )
}

export default Carousel