import React from "react";
// import { Link } from "react-router-dom";
// import Auth from "../Auth/Auth";
// import Login from "../Login/Login";

import Login from "../Login/Login"
function LoginBtn() {
  return (
    <div>



      {/* <Link to="../Auth/Auth"> */}
      <input type="button" className=" login" value="Login" onClick={Login}/>
      {/* </Link> */}
    </div>
  );
}

export default LoginBtn;
