import React from "react";

import { Link } from "react-router-dom";

import "./header.css";
import main_logo from "../../img/main_logo.png";
import SignUpBtn from "../SignUpBtn/SignUpBtn";

// import MenuBtn from "../MenuBtn/MenuBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
import ProductPageBtn from "../ProductPageBtn/ProductPageBtn";

function Header() {
  return (
    <div>
      <div className="navbar container-fluid">
        <div className=" navbar-brand">
          <Link to="/">
            <img src={main_logo} className="main_logo navbar-brand" alt="logo" />
          </Link>
        </div >
        
        <ul className="navbar-nav navBar_wrapper">
          <li className="nav-item"><Link to="/login" className="nav-link">
            <LoginBtn />
          </Link></li>

          <li className="nav-item"><Link to="/register">
            <SignUpBtn />
          </Link></li>

          {/* <MenuBtn/> */}

          {/* <li className="nav-item"><Link to="/product">
            <ProductPageBtn />
          </Link></li> */}
          <li class="nav-item dropstart"/>
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Menu</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Link 1</a></li>
      <li><a class="dropdown-item" href="#">Link 2</a></li>
      <li><a class="dropdown-item" href="#">Link 3</a></li>
        </ul>
       </ul>
      </div>
    </div>
  );
}

export default Header;
