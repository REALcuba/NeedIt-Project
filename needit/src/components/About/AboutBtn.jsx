import React from "react";
import { Link } from "react-router-dom";
// import About from "../About/";

import About from "./About"

function AboutBtn() {
  return (
    <div>
    <Link to="/about"><h2>About Us</h2></Link> 
      {/* <input type="button" className="aboutus" value="About Us" onClick={About}/> */}
    
    </div>
  );
}

export default AboutBtn;
