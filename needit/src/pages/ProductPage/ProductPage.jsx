import React from 'react'
import Slider from '../../components/ProductSlider/Slider/Slider'

import Searchbar from '../../components/SearchBar/SearchBar'
function ProductPage() {
  return (
    <div className='productPageDiv'>
      <div ><Searchbar/></div>
      {/* /start your code below */}
      <h2>ProductsPage</h2>
      <Slider/>
      
    </div>
  )
}

export default ProductPage