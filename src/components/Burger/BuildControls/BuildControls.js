import React from "react";

export default function(props) {
  return (
    <div>
      {props.availableIngredients.map(ingredient => (
        <button onClick={() => props.onAddIngredient(ingredient.type)}>
          Add {ingredient.label}
        </button>
      ))}
    </div>
  );
}
