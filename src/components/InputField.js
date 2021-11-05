/** @format */
import React from "react";

function InputField(props) {
  return (
    <div>
      <input type="text" name="grocery" placeholder="put in new Grocery" onChange={props.onChange}></input>
      <input type="submit" name="button" ></input>
    </div>
  );
}

export default InputField;
