import React from "react";

import "./header.css";
import main_logo from "../../img/main_logo.png";

import SignUp from "../SignUpBtn/SignUp";
// import Login from "../Login/Login";
import LoginBtn from "../LoginBtn/LoginBtn";
// import MenuBtn from "../MenuBtn/MenuBtn";
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
      <div className="navBar_wrapper">
        <div className="logo">
          <img src={main_logo} className="main_logo" alt="logo" />
        </div>

        <div className="navBar">
          
            <Link to="/Auth">
               <LoginBtn/> 
               </Link>
         

          <i>
            <SignUp />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Header;
