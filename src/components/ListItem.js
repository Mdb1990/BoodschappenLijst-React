/** @format */
import React from "react";

function ListItem(props) {
  return (
    <li onClick={props.handleClickGroceryItem} key={props.id}>
      {props.title}
    </li>
  );
}

export default ListItem;
