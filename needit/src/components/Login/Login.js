import React, { useState } from "react";
import "./loginForm.css";
import { Link } from "react-router-dom";

function Login() {
  const [emailReg, setEmailReg] = useState("");

  const [passwordReg, setpasswordReg] = useState("");

  const Register = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailReg,

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
    <div className="loginform">
      <form className="loginmember" onSubmit={Register}>
        <h1>Member Login</h1>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        ></input>

        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => {
            setpasswordReg(e.target.value);
          }}
        ></input>

        <button type="submit">Login</button>

        <Link to="/Register">Not member yet? signup here</Link>
      </form>
    </div>
  );
}

export default Login;
