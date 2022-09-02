import React, { useState } from "react";
import { Link } from "react-router-dom";

function Donate() {
//   const [productInfo, setProductInfo] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [cathegory, setCathegory] = useState("");
  const [Pictures, setPictures] = useState([]);

  // const handleChange =(event) =>{
  //     setProductInfo(event.target.value);
  //     console.log({setProductInfo});
  // }

  return (
    <div className="container">
      <form className="loginmember d-flex flex-column">
        <h1>Donate your product</h1>
        <label for="product" class="form-label">
          Nombre del producto:
        </label>
        <input
          className="form-control"
          type="title"
          placeholder="Nombre del producto"
          required
          onChange={(e) => {
            setProduct(e.target.value);
          }}
        //   value={productInfo}
        ></input>
<label for="status" class="form-label">
          Status:
        </label>
        <input
          className="form-control"
          type="status"
          placeholder="Status"
          required
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        ></input>
        <label for="cathegory" class="form-label">
          Categoria:
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Categoria"
          required
          onChange={(e) => {
            setCathegory(e.target.value);
          }}
        ></input>
        <label for="description" class="form-label">
          Descripción:
        </label>
        <input
          className="form-control"
          type="description"
          placeholder="descripción"
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <label for="pic" class="form-label">
          Imagen:
        </label>
        <input
          className="form-control"
          type="file"
          placeholder="sube tus fotos"
          required
          onChange={(e) => {
            setPictures(e.target.value);
          }}
        ></input>
        {/* <h2>{productInfo}</h2> */}
        <button type="submit">Donate</button>

        {/* <Link to="/Register">Not member yet? signup here</Link> */}
      </form>
    </div>
  );
}

export default Donate;
