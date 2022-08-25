import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";
import migracodeLogo from "../../img/migracodeLogo.png";
<<<<<<< HEAD
// import Chat from "../Chat/Chat";
=======
// import About from "../About/About";
>>>>>>> 69f6c37a1e64ab7b7e4515a90185a299a15d4bd8
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
          target="_blank " rel="noreferrer"
          href="https://migracode.openculturalcenter.org/"
          className="migracodeLogo"
          >
          <img src={migracodeLogo} alt="" />
          Migracode
        </a>
         {/* <Link to="/chat"> */}
          {/* <Chat/> */}
         
      {/* </Link> */}

      </div>
    </div>
  );
}

export default Footer;
