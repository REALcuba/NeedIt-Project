import React from "react";
// import { Link } from "react-router-dom";
// import Auth from "../Auth/Auth";
// import Login from "../Login/Login";

import Login from "../Login/Login"
function LoginBtn() {
  return (
    <div>
     
      <input type="button" className=" login" value="Login" onClick={Login}/>
    
    </div>
  );
}

export default LoginBtn;
