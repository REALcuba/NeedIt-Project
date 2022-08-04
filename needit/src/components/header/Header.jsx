import React from 'react'

import "./header.css";
import main_logo from "../../img/main_logo.png";


function Header() {
  return (
    <div >
       <div className='navBar_wrapper'>
        <div className='logo'>
          <img src={main_logo} className="main_logo" alt="logo" />
        </div>
        <div>
        {/* <div className='app_name'><p>Need It?</p></div> */}
         <div>
          <input className='searchBar' type="text" />
          <input type="button" />
         </div>

        </div>
        <div className='menu'><p>menu</p></div>
       </div>
    </div>
  )
}

export default Header