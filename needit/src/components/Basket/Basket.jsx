import React, { useState } from "react";
import Basketitem from "./Basketitem";
import "./basket.css";

const Basket = () => {
  const productList = [
    {
      id: 1,
      image:
        "https://experteletro.pt/321162-large_default/02-811-002-20486-hisense-frigorifico-1-porta-rr154d4aw2.jpg",
      itemName: "Nevera",
      ownerName: "Asaad Ben",
      pickupAddress: "Rambla Del Carmel ",
    },
    {
      id: 2,
      image:
        "https://media.btech.com/media/catalog/product/cache/9cbcea4c652be3b2d9b1aad6a8b9fdeb/p/l/playstation_1.jpg",
      itemName: "PS4",
      ownerName: "Asadito",
      pickupAddress: "Dami's House",
    },
    {
      id: 3,
      image:
        "https://experteletro.pt/321162-large_default/02-811-002-20486-hisense-frigorifico-1-porta-rr154d4aw2.jpg",
      itemName: "Nevera",
      ownerName: "Asaad Ben",
      pickupAddress: "Rambla Del Carmel ",
    },
    {
      id: 4,
      image:
        "https://media.btech.com/media/catalog/product/cache/9cbcea4c652be3b2d9b1aad6a8b9fdeb/p/l/playstation_1.jpg",
      itemName: "PS4",
      ownerName: "Asadito",
      pickupAddress: "Dami's House",
    },
    {
      id: 5,
      image:
        "https://experteletro.pt/321162-large_default/02-811-002-20486-hisense-frigorifico-1-porta-rr154d4aw2.jpg",
      itemName: "Nevera",
      ownerName: "Asaad Ben",
      pickupAddress: "Rambla Del Carmel ",
    },
    {
      id: 6,
      image:
        "https://media.btech.com/media/catalog/product/cache/9cbcea4c652be3b2d9b1aad6a8b9fdeb/p/l/playstation_1.jpg",
      itemName: "PS4",
      ownerName: "Asadito",
      pickupAddress: "Dami's House",
    },
  ];
  const [products, setProducts] = useState(productList);
  return (
    <div className="basket">
      <h1>YOUR CART</h1>

      {products.length === 0 ? (
        <p>There are no items in your cart </p>
      ) : (
        <p>{products.length} items</p>
      )}
      {products.map((product) => (
        <Basketitem
          productList={products}
          setProducts={setProducts}
          id={product.id}
          image={product.image}
          itemName={product.itemName}
          ownerName={product.ownerName}
          pickupAddress={product.pickupAddress}
        />
      ))}
    </div>
  );
};

export default Basket;
