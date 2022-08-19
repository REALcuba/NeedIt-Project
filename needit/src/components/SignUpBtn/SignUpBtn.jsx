import React from "react";
// import { Link } from "react-router-dom";
// import Auth from "../Auth/Auth";
// import Login from "../Login/Login";

import SignUp from "../SignUp/Register";
function SignUpBtn() {
  return (
    <div>
      <input type="button" className=" login" value="SignUp" onClick={SignUp} />
    </div>
  );
}

export default SignUpBtn;
