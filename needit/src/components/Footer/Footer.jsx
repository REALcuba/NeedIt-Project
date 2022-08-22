import React from 'react'

import "./footer.css"
import migracodeLogo from "../../img/migracodeLogo.png"

//component
import About from '../About/About'
import AboutBtn from '../AboutBtn/AboutBtn'

function Footer() {
  return (
    <div className='footerDiv'>
       
        <Link to="/about">
            <AboutBtn  />
            </Link>
            
        <div className='migracodeDiv'>
            <a href="https://migracode.openculturalcenter.org/" className='migracodeLogo' >
                <img src= {migracodeLogo} alt="" />Migracode</a>
        </div>
    </div>
  )
}

export default Footer