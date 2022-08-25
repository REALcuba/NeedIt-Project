import React, { useState } from "react";
import "./style.css";

function Signup() {
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [cityReg, setcityReg] = useState("");
  const [countryReg, setcountryReg] = useState("");
  const [usernamesReg, setusernamsReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");

  const Register = (e) => {
    console.log("form is executed");
    e.preventDefault();

    fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify({
        name: usernameReg,
        email: emailReg,
        city: cityReg,
        country: countryReg,
        username: usernamesReg,
        password: passwordReg,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="Signup">
      <form className="registration" onSubmit={Register} method="POST">
        <h1>Sign Up</h1>
        <h3>Enter your personal details</h3>
        <input
          type="text"
          name="name"
          placeholder=" Full name"
          required
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        ></input>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        ></input>

        <input
          type="text"
          name="city"
          placeholder="City"
          required
          onChange={(e) => {
            setcityReg(e.target.value);
          }}
        ></input>

        <input
          type="text"
          name="country"
          placeholder=" Country"
          required
          onChange={(e) => {
            setcountryReg(e.target.value);
          }}
        ></input>

        <input
          type="text"
          name="username"
          placeholder="username"
          required
          onChange={(e) => {
            setusernamsReg(e.target.value);
          }}
        ></input>

        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={(e) => {
            setpasswordReg(e.target.value);
          }}
        ></input>

        <button type="submit">Sign Up</button>

        <a href="/login">Already registered? Login here</a>
      </form>
    </div>
  );
}

export default Signup;
