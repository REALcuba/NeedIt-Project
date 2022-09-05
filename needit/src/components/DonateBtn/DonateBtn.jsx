import React from "react";
import Donate from "../../pages/Donate/Donate";
// import { Link } from "react-router-dom";
// import Auth from "../Auth/Auth";
// import Login from "../Login/Login";

function DonateBtn() {
  return (
    <div className="d-flex justify-content-end">
     
      <input type="button" className=" btn btn-primary d-flex justify-content-start" value="Donate your product" onClick={Donate}/>
    
    </div>
  );
}

export default DonateBtn;
