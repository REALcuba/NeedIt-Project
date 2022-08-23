import React from "react";
import { Link } from "react-router-dom";
// import About from "../About/";

import About from "./About";

function AboutBtn() {
  return (
    <Link to="/about">
      <div>
        <h2>About Us</h2>
        {/* <input type="button" className="aboutus" value="About Us" onClick={About}/> */}
      </div>
    </Link>
  );
}

export default AboutBtn;
