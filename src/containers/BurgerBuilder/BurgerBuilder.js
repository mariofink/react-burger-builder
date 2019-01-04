import React, { Component } from "react";
import Burger from "components/Burger/Burger";
import BuildControls from "components/Burger/BuildControls/BuildControls";
import OrderSummary from "components/Burger/OrderSummary/OrderSummary";

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
      totalPrice: BASE_PRICE,
      purchasing: false
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
  order = () => {
    this.setState({ purchasing: true });
  };
  render() {
    return (
      <div>
        {this.state.purchasing ? (
          <OrderSummary
            availableIngredients={availableIngredients}
            ingredients={this.state.ingredients}
            basePrice={BASE_PRICE}
            totalPrice={this.state.totalPrice}
          />
        ) : null}
        <div>{this.state.totalPrice}€</div>
        <div>
          <button
            onClick={this.order}
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
