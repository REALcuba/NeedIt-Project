import React from "react";
import { Link } from "react-router-dom";
// import About from "../About/";


function AboutBtn() {
  return (
    <div className="aboutEl">
    <Link to="/about">About Us</Link> 
      {/* <input type="button" className="aboutus" value="About Us" onClick={About}/> */}
    
    </div>
  );
}

export default AboutBtn;
