import React, { Component } from "react";
import Burger from "components/Burger/Burger";
import BuildControls from "components/Burger/BuildControls/BuildControls";

const BASE_PRICE = 5;
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
      ingredients: [],
      totalPrice: BASE_PRICE
    };
  }
  addIngredient(ingredient) {
    this.setState(state => {
      const updatedIngredients = [ingredient, ...state.ingredients];
      return {
        ingredients: updatedIngredients,
        totalPrice: this.calculateTotalPrice(updatedIngredients)
      };
    });
  }
  calculateTotalPrice(ingredients) {
    return ingredients.reduce((currentPrice, ingredient) => {
      return currentPrice + availableIngredients[ingredient].price;
    }, BASE_PRICE);
  }
  order() {
    console.log("show order modal");
  }
  render() {
    return (
      <div>
        <div>{this.state.totalPrice}€</div>
        <div>
          <button
            onClick={() => this.order()}
            disabled={this.state.ingredients.length < 1}
          >
            Order Now
          </button>
        </div>
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
