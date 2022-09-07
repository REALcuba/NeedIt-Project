import React, { useState , useRef} from "react";
import './donate.css'
function Donate() {
//   const [productInfo, setProductInfo] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [cathegory, setCathegory] = useState("");
  const [pictures, setPictures] = useState([]);

  const selectedFile = useRef()
  const uploader = async ()=> {
// console.log(name);
console.log(selectedFile);
  }

  return (
    <div className="container">
      <form className="loginmember d-flex flex-column ">
        <h1>Donate your product</h1>
        <label for="product" className=" product-label form-label d-flex justify-content-start">
          Nombre del producto:
        </label>
        <input
          className="form-control"
          type="title"
          placeholder="Nombre del producto"
          required
          onChange={(e) => {
            setProduct(e.target.value);
            console.log(product)
          }}
        //   value={productInfo}
        ></input>
<label for="status" className=" product-label form-label d-flex justify-content-start">
          Status:
        </label >
        <input
          className="form-control"
          type="status"
          placeholder="Status"
          required
          onChange={(e) => {
            setStatus(e.target.value);
            console.log(status);
          }}
        ></input>
        <label for="cathegory" className=" product-label form-label d-flex justify-content-start">
          Categoria:
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Categoria"
          required
          onChange={(e) => {
            setCathegory(e.target.value);
            console.log(cathegory);
          }}
        ></input>
        <label for="description" className=" product-label form-label d-flex justify-content-start">
          Descripción:
        </label>
        <input
          className="form-control"
          type="description"
          placeholder="descripción"
          required
          onChange={(e) => {
            setDescription(e.target.value);
            console.log(description);

          }}
        ></input>
        <label for="pic" className=" product-label form-label d-flex justify-content-start">
          Imagen:
        </label>
        <input 
          className="form-control"
          type="file"
          ref={selectedFile}
          placeholder="sube tus fotos"
          required
          onChange={(e) => {
            setPictures(e.target.value);
            console.log(pictures);
          }}
        ></input>
        {/* <h2>{productInfo}</h2> */}
        <button type="submit" onClick={uploader}>Donate</button>

        {/* <Link to="/Register">Not member yet? signup here</Link> */}
      </form>
    </div>
  );
}

export default Donate;
