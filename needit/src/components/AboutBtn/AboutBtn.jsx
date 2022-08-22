import React from "react";
// import { Link } from "react-router-dom";
// import Auth from "../Auth/Auth";
// import Login from "../Login/Login";

import About from "../About/About"
function AboutBtn() {
  return (
    <div>
     
      <input type="button" className=" AboutBtn" value="About" onClick={About}/>
    
    </div>
  );
}

export default AboutBtn;
