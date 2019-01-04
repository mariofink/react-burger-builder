import React from "react";

export default function(props) {
  return (
    <div>
      {Object.keys(props.availableIngredients).map(ingredientKey => (
        <button
          key={ingredientKey}
          onClick={() => props.onAddIngredient(ingredientKey)}
        >
          Add {props.availableIngredients[ingredientKey].label}
        </button>
      ))}
    </div>
  );
}
