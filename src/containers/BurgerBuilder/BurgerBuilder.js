import React, { Component } from "react";
import Burger from "components/Burger/Burger";
import BuildControls from "components/Burger/BuildControls/BuildControls";

const availableIngredients = {
  bread: {
    label: "Bread",
    price: 1
  },
  patty: {
    label: "Patty",
    price: 2
  },
  tomatoe: {
    label: "Tomatoe",
    price: 0.5
  },
  lettuce: {
    label: "Lettuce",
    price: 0.3
  }
};

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
          <BuildControls
            availableIngredients={availableIngredients}
            onAddIngredient={type => this.addIngredient(type)}
          />
        </div>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
      </div>
    );
  }
}
