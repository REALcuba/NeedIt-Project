import React from 'react';
import SignUp from '../SignUp/SignUp';

import "./signUp.css"
function SignUpBtn() {
  return (
    <div>
      <input type="button" className="signUpBtn Btn" value="Sign Up" onClick={SignUp}/>

    </div>
  )
}

export default SignUpBtn;