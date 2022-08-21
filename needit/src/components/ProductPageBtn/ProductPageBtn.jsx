import React from "react";
// import { Link } from "react-router-dom";
// import Auth from "../Auth/Auth";
// import Login from "../Login/Login";

import ProductPage from "../ProductPage/ProductPage";
function ProductPageBtn() {
  return (
    <div>
      <input type="button" className="ProductPageBtn Btn" value="Product" onClick={ProductPage} />
    </div>
  );
}

export default ProductPageBtn;
