import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import migracodeLogo from "../../img/migracodeLogo.png";
// import About from "../About/About";
//component
import AboutBtn from "../About/AboutBtn";

function Footer() {
  return (
    <div className="footerDiv">
      <div>
        {/* <Link to="/about">
          <AboutBtn />
        </Link> */}

      </div>
      
      <div className="migracodeDiv">
        <a
          target="_blank " rel="noreferrer"
          href="https://migracode.openculturalcenter.org/"
          className="migracodeLogo"
          >
          <img src={migracodeLogo} alt="" />
          Migracode
        </a>
      </div>
    </div>
  );
}

export default Footer;
