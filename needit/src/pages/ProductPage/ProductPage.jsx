import React from 'react'
import "./productPage.css"

import Slider from '../../components/ProductSlider/Slider/Slider'

import Searchbar from '../../components/SearchBar/SearchBar'
function ProductPage() {
  return (
    <div className='productPageDiv'>
      <div ><Searchbar/></div>
      {/* /start your code below */}
      <h2 className='display-2'>ProductsPage</h2>
      <Slider/>
      
    </div>
  )
}

export default ProductPage