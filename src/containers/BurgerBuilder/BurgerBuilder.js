import React, { Component } from "react";
import BurgerIngredient from "components/Burger/BurgerIngredient/BurgerIngredient";

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
        <div>
          {this.state.ingredients.map((ingredient, i) => (
            <BurgerIngredient type={ingredient} key={ingredient + i} />
          ))}
        </div>
        <div>
          <button onClick={() => this.addIngredient("bread")}>Add bread</button>
          <button onClick={() => this.addIngredient("patty")}>Add patty</button>
          <button onClick={() => this.addIngredient("tomatoe")}>
            Add tomatoe
          </button>
          <button onClick={() => this.addIngredient("lettuce")}>
            Add lettuce
          </button>
        </div>
      </div>
    );
  }
}
