import React from 'react'
import logo from "../../img/NeedIt.gif";
import Carousel from "../Carousel/Carousel";
import './mainbanner.css'

const MainBanner = () => {
  return (
    <section className="main-banner">
        <div className='logo-container'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Description</p>
        </div>

    
        <Carousel />
      </section>
  )
}

export default MainBanner
