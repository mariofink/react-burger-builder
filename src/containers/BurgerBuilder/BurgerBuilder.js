import React, { Component } from "react";

export default class BurgerBuilder extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: []
    };
  }
  addIngredient(ingredient) {
    this.setState({
      ingredients: [ingredient, ...this.state.ingredients]
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.ingredients}</div>
        <div>
          <button onClick={() => this.addIngredient("bread")}>Add bread</button>
          <button onClick={() => this.addIngredient("patty")}>Add patty</button>
          <button onClick={() => this.addIngredient("tomatoe")}>
            Add tomatoe
          </button>
        </div>
      </div>
    );
  }
}
