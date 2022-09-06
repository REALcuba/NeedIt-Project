import React, { useState } from "react";
import "./loginForm.css";
import loginUser from "./loginUser.json"
import { Link } from "react-router-dom";

function Login() {
  const [emailReg, setEmailReg] = useState("");
console.log(emailReg)
  const [passwordReg, setpasswordReg] = useState("");
  const [error, Seterror] = useState();
  const Register = (e) => {
    
    console.log("form is executed");
    e.preventDefault();

    //   fetch("http://localhost:5000/users", {
    //     method: "GET",
    //     body: JSON.stringify({
    //       email: emailReg,

    //       password: passwordReg,
    //     }),
    //     headers: { "Content-type": "application/json; charset=UTF-8" },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
  };

  return (
    <div className="loginform">
      <form className="loginmember" onSubmit={Register}>
        <h1>Member Login</h1>

        <input
          type="email" id="email"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        ></input>

        <input
          type="password" id="password"
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
