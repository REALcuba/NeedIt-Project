import React from "react";

const Basketitem = (props) => {
  const deleteItem = () => {
    const arrayWithoutItem = props.productList.filter(
      (item) => item.id !== props.id
    );
    props.setProducts(arrayWithoutItem);
  };
  return (
    <div className="basket-item">
      <div className="basket-item-info">
        <img src={props.image} alt="nevera" />

        <div className="item-info">
          <h4>{props.itemName}</h4>
          <p>{props.ownerName}</p>
          <p>{props.pickupAddress}</p>
        </div>
      </div>
      <div className="item-action">
        <button type="button" class="btn btn-danger" onClick={deleteItem}>
          Delete
        </button>
        <button type="button" class="btn btn-secondary">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Basketitem;
