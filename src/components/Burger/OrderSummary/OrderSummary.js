import React from "react";
import Modal from "components/Ui/Modal/Modal";

export default function(props) {
  function ingredientList() {
    return props.ingredients.map((ingredientKey, i) => {
      const ingredient = props.availableIngredients[ingredientKey];
      return (
        <li key={ingredient + i}>
          {ingredient.label} – {ingredient.price}€
        </li>
      );
    });
  }
  return (
    <Modal show={props.show}>
      <ul>
        <li>Base price – {props.basePrice}€</li>
        {ingredientList()}
      </ul>
      <strong>Total: {props.totalPrice}€</strong>
    </Modal>
  );
}
