import React, { useState } from "react";

function Signup() {
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [cityReg, setcityReg] = useState("");
  const [countryReg, setcountryReg] = useState("");
  const [usernamesReg, setusernamsReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");

  const register = () => {
    fetch("http://localhost:5000/users", {
      userName: usernameReg,
      userEmail: emailReg,
      userCity: cityReg,
      userCountry: countryReg,
      usernames: usernamesReg,
      userpassword: passwordReg,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="Signup">
      <div className="registration">
        <h1>Sign Up</h1>
        <label>Full name</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        ></input>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        ></input>
        <label>City</label>
        <input
          type="text"
          onChange={(e) => {
            setcityReg(e.target.value);
          }}
        ></input>
        <label>Country</label>
        <input
          type="text"
          onChange={(e) => {
            setcountryReg(e.target.value);
          }}
        ></input>
        <label>username</label>
        <input
          type="text"
          onChange={(e) => {
            setusernamsReg(e.target.value);
          }}
        ></input>
        <label>password</label>
        <input
          type="password"
          onChange={(e) => {
            setpasswordReg(e.target.value);
          }}
        ></input>
        <button onClick={register}>Sign Up</button>
      </div>
    </div>
  );
}
export default Signup;
