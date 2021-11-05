/** @format */
import React from "react";
import ListItem from "./ListItem.js";

function List(props) {
  const Lists = props.ItemList;
  return (
    <ul>
      {Lists.map((item) => (
        <ListItem handleClickGroceryItem={props.handleClickGroceryItem} key={item.id} title={item.title} handleClick={props.handleClick} />
      ))}
    </ul>
  );
}

export default List;
