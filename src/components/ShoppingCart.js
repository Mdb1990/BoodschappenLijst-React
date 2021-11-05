/** @format */

import React from "react";
import List from "./List";

function ShoppingCart(props) {
  const shopList = props.shoppingList;
  return (
    <ul>
      <List ItemList={shopList} />
      <button onClick={props.emptyCart}>Empty Cart</button>
    </ul>
  );
}

export default ShoppingCart;
