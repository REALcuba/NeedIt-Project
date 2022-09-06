import React from "react";


import SignUp from "../SignUp/Register";
function SignUpBtn() {
  return (
    <div>
      <input type="button" className=" login" value="SignUp" onClick={SignUp} />
    </div>
  );
}

export default SignUpBtn;
