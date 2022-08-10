import React from 'react'

import "./menuBtn.css";
import menu from "./menu-squared.png"

function MenuBtn() {
  return (
    <div>
        <input type="button" className='menu' value="Menu" src={menu}/>
    </div>
  )
}

export default MenuBtn