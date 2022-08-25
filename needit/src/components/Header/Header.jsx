import React from "react";

import { Link } from "react-router-dom";

import "./header.css";
import main_logo from "../../img/main_logo.png";
import SignUpBtn from "../SignUpBtn/SignUpBtn";

// import MenuBtn from "../MenuBtn/MenuBtn";
import LoginBtn from "../LoginBtn/LoginBtn";
// import ProductPageBtn from "../ProductPageBtn/ProductPageBtn";

function Header() {
  return (
    <div>
      <div className="navbar container">
        <div className=" navbar-brand">
          <Link to="/">
            <img
              src={main_logo}
              className="main_logo navbar-brand"
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <ul className="navbar-nav navBar_wrapper">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <LoginBtn />
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/register">
                <SignUpBtn />
              </Link>
            </li>
          </ul>
        </div>

        {/* <MenuBtn/> */}

        {/* <li className="nav-item"><Link to="/product">
            <ProductPageBtn />
          </Link></li> */}
        <div>
          <h3
            className="nav-link dropdown-toggle "
            data-bs-toggle="dropdown"
           
          >
            Menu
          </h3>
          <ul class="dropdown-menu dropdown-menu-end">
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
    </div>
  );
}

export default Header;
