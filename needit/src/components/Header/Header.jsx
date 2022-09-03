import React from "react";

import { Link } from "react-router-dom";
import menuImg from "../../img/casa.png";
import "./header.css";
import main_logo from "../../img/main_logo.png";
import SignUpBtn from "../SignUpBtn/SignUpBtn";

// import MenuBtn from "../MenuBtn/MenuBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
// import ProductPageBtn from "../ProductPageBtn/ProductPageBtn";

function Header() {
  return (
    // <div className="container">
    <div className="navbar ">
      <div className=" navbar-brand">
        <Link to="/">
          <img src={main_logo} className="main_logo navbar-brand" alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="navbar-nav navBar_wrapper">
      
          <li className="nav-item">
            <Link to="/" className="login">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <LoginBtn />
            </Link>
          </li>

          <li className="nav-item Btn">
            <Link to="/register">
              <SignUpBtn />
            </Link>
          </li>
        </ul>
      </div>

      <div className="menuIcon">
        <div className="nav-link dropdown-toggle " data-bs-toggle="dropdown">

          <img src={menuImg} className="menuImg" alt="menu" />


        </div>
        <ul class="dropdown-menu dropdown-menu-end">
         <li>
            {" "}
            <Link to="/" className="dropdown-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="dropdown-item">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="dropdown-item">
              SignUp
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/" className="dropdown-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="dropdown-item">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="dropdown-item">
              SignUp
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="product">
              product
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
}

export default Header;
