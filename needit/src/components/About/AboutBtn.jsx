import React from "react";
import { Link } from "react-router-dom";
import "./about.css"

function AboutBtn() {
  return (
    <Link to="/about">
      <div className="aboutEl">
        <h2 className="aboutText">About Us</h2>
        {/* <input type="button" className="aboutus" value="About Us" onClick={About}/> */}
      </div>
    </Link>
  );
}

export default AboutBtn;
