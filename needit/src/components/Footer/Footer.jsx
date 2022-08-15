import React from 'react'

import "./footer.css"
import migracodeLogo from "../../img/migracodeLogo.png"

function Footer() {
  return (
    <div className='footerDiv'>
        <div className='migracodeDiv'>
            <a href="https://migracode.openculturalcenter.org/" className='migracodeLogo'>
                <img src= {migracodeLogo} alt="" />Migracode  </a>
        </div>
        
    </div>
  )
}

export default Footer