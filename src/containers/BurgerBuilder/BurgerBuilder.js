import React, { Component } from "react";
import Burger from "components/Burger/Burger";
import BuildControls from "components/Burger/BuildControls/BuildControls";

const availableIngredients = [
  {
    label: "Bread",
    type: "bread"
  },
  {
    label: "Patty",
    type: "patty"
  },
  {
    label: "Tomatoe",
    type: "tomatoe"
  },
  {
    label: "Lettuce",
    type: "lettuce"
  }
];

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
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuildControls
            availableIngredients={availableIngredients}
            onAddIngredient={type => this.addIngredient(type)}
          />
        </div>
      </div>
    );
  }
}
