import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import migracodeLogo from "../../img/migracodeLogo.png";
// import Chat from "../Chat/Chat";
//component
import AboutBtn from "../About/AboutBtn";


function Footer()  {
  return (
    <div className="footerDiv">
      <Link to="/about">
        <AboutBtn />
      </Link>

      <div className="migracodeDiv">
        <a
          target="_blank "
          href="https://migracode.openculturalcenter.org/"
          className="migracodeLogo"
        >
          <img src={migracodeLogo} alt="" />
          {/* Migracode */}
        </a>
    

      </div>
    </div>
  );
}

export default Footer;
