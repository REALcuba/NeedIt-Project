import React from 'react'

import "./header.css";
import main_logo from "../../img/main_logo.png";

import Login from '../LoginBtn/Login';
import SignUp from "../SignUpBtn/SignUp"
import MenuBtn from '../MenuBtn/MenuBtn';

function Header() {
  return (
    <div >
       <div className='navBar_wrapper'>
        <div className='logo'>
          <img src={main_logo} className="main_logo" alt="logo" />
        </div>
        <div className='searchBarDiv'>
        {/* <div className='app_name'><p>Need It?</p></div> */}
         <div >
          <input className='searchBar' type="text" placeholder='search'/>
          <input type="submit" className="searchBarBtn" value="search" />
         </div>

        </div>
        <div className=''>
        <div className='menuBtn'> <Login/></div>
        <div className='menuBtn'> <SignUp/></div>
        <div className='menuBtn'> <MenuBtn/></div>
        </div>
       </div>
    </div>
  )
}

export default Header