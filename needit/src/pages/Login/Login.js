import React, { useState } from "react";
import "./loginForm.css";
import { Link } from "react-router-dom";

function Login() {
  const [emailReg, setEmailReg] = useState("");

  const [passwordReg, setpasswordReg] = useState("");

  // const PGDATABASE="railway"
  // const PGHOST=`containers-us-west-55.railway.app`
  // // const PGPASSWORD=
  // const PGPORT=7481
  // const PGUSER="postgres"
  //   const DATABASE_URL=`http://${{ PGUSER }}:${{ PGPASSWORD }}@${{ PGHOST }}:${{ PGPORT }}/${{ PGDATABASE }}`

  const Register = (e) => {
    e.preventDefault();

 
    fetch( "https://localhost:5000/users", {
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

        <button type="submit" onClick={Register}>Login</button>

        <Link to="/Register">Not member yet? signup here</Link>
      </form>
    </div>
  );
}

export default Login;
