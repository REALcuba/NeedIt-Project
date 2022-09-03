import React from 'react';

import "./productSlider.css";
import Slider from './Slider/Slider';

function Carousel() {
  return (
    <div className='carousel_wrapper'>
       <h1 className="display-1">Products</h1> 
        {/* <div> */}
         <Slider/>
        {/* </div> */}
    </div>
  )
}

export default Carousel