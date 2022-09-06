import React from 'react'
import Slider from '../ProductSlider/Slider/Slider'

import Searchbar from '../SearchBar/SearchBar'
import { productdb } from './productdb'


function productApp() {
  return(
      <card
      img = 'https://static.dezeen.com/uploads/2022/05/ella-chair-matthew-hilton-case-furniture-design_dezeen_2364_hero.jpg'
      description = 'Furniture'
      />
  )
  
}

function ProductPage(props) {
  
  return (
    <div className='productPageDiv'>
      <div ><Searchbar/></div>
      {/* /start your code below */}
      <h2>ProductsPage</h2>
      <div>
        <img className='card_image'/>
      </div>
      <div>
        <h2 className='card_descrption'></h2>
        <button className='card_btn'></button>
      </div>
      
      
    </div>
  )
}


export default ProductPage