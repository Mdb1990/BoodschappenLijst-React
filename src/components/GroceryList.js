/** @format */

import React from "react";
import InputField from "./InputField";
import List from "./List";

function GroceryList(props) {
  const GrList = props.listGrocery;
  return (
    <ul>
      <InputField onChange={props.onChange} />
      <List handleClickGroceryItem={props.handleClickGroceryItem} ItemList={GrList} />
    </ul>
  );
}

export default GroceryList;
