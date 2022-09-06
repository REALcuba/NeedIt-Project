import React, { useState } from "react";
import "./loginForm.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const [anthenError, setAntenError] = useState(false);

  const Register = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailReg,

        password: passwordReg,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.isAuthenticated);
        setAntenError(true);
        if (data.isAuthenticated) {
          navigate("/");
        } else if (data.error === "Password incorrect") {
        } else {
          navigate("/Register");
        }
      });
  };

  return (
    <div className="loginform d-flex justify-content-center align-items-center">
      <form className="loginmember d-flex flex-column" onSubmit={Register}>
        <h1>Member Login</h1>

        <input
          className="form-control"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        ></input>

        <input
          className="form-control"
          type="password"
          placeholder="password"
          required
          onChange={(e) => {
            setpasswordReg(e.target.value);
          }}
        ></input>

        <button type="submit" onClick={Login}>
          Login
        </button>
        {anthenError ? (
          <p className="text-success">you are login successfully</p>
        ) : (
          <Link to="/Register">Not member yet? signup here</Link>
        )}
      </form>
    </div>
  );
}

export default Login;
