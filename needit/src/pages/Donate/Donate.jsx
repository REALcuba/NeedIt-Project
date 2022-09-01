import React, {useState} from 'react'
import { Link } from "react-router-dom";

function Donate() {
    const [emailReg, setEmailReg] = useState("");

    const [passwordReg, setpasswordReg] = useState("");
  return (
    <div className='container'>
        <form className="loginmember d-flex flex-column" onSubmit={Donate}>
        <h1>Donate your product</h1>

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

        <button type="submit">Login</button>

        <Link to="/Register">Not member yet? signup here</Link>
      </form>
    
    </div>
  )
}

export default Donate