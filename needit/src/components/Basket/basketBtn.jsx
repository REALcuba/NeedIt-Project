import React from "react";
// import { Link } from "react-router-dom";
// import Auth from "../Auth/Auth";
// import Login from "../Login/Login";

import Basket from "../Basket/Basket";

function BasketBtn() {
  return (
    <div>
     
      <input type="button" className=" basket" value="Basket" onClick={Basket}/>
    
    </div>
  );
}

export default BasketBtn;
