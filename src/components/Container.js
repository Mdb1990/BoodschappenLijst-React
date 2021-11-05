/** @format */
import React, { Component } from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "appel" },
        { id: 2, title: "bananen" },
        { id: 3, title: "kiwi" },
        { id: 4, title: "Vlees" },
      ],
      shoppingListItems: [
        { id: 5, title: "Bier" },
        { id: 6, title: "Havermout" },
        { id: 7, title: "Eieren" },
        { id: 8, title: "Melk" },
      ],
    };
    console.log(props.onChange);
  }

  handleClickGroceryItem = (event) => {
    const newObject = { id: Math.floor(Math.random() * 100), title: event.target.innerHTML };
    this.setState((prevState) => ({
      shoppingListItems: [...prevState.shoppingListItems, newObject],
    }));
  };

  emptyCart = () => {
    const newEmpty = [];
    this.setState({ shoppingListItems: newEmpty });
  };

  handleInput = (event) => {
    const newObject = { id: Math.floor(Math.random() * 100), title: event.target.value };
    this.setState((prevState) => ({
      groceryItems: [...prevState.groceryItems, newObject],
    }));
  };

  handleInputClick = (event, newObj) => {};

  render() {
    return (
      <div>
        <GroceryList onChange={this.handleInput} handleClickGroceryItem={this.handleClickGroceryItem} listGrocery={this.state.groceryItems} />;
        <ShoppingCart emptyCart={this.emptyCart} shoppingList={this.state.shoppingListItems} />
      </div>
    );
  }
}

export default Container;
