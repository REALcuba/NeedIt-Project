import React from "react";

import "./header.css";
import main_logo from "../../img/main_logo.png";

import SignUpBtn from "../SignUpBtn/SignUpBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
      <div className="navBar_wrapper">
        <div className="logo">
         <Link to="/">
           <img src={main_logo} className="main_logo" alt="logo" />
           </Link>
        </div>

        <div className="navBar">
          
            <Link to="/login">
               <LoginBtn/> 
               </Link>
         

          
            <Link to="/signup">
            <SignUpBtn />
            </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
