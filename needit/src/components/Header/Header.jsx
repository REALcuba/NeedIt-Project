import React from "react";

import { Link } from "react-router-dom";

import "./header.css";
import main_logo from "../../img/main_logo.png";
import SignUpBtn from "../SignUpBtn/SignUpBtn";

// import MenuBtn from "../MenuBtn/MenuBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import ProductPageBtn from "../ProductPageBtn/ProductPageBtn";
import AboutBtn from "../About/AboutBtn";

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
            <LoginBtn />
          </Link>

          <Link to="/register">
            <SignUpBtn />
          </Link>

         
            {/* <MenuBtn/> */}
          
          <Link to="/product">
            <ProductPageBtn/>
          </Link>
          <Link to="/about">
            <AboutBtn/>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Header;
