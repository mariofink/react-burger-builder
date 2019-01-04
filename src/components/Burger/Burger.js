import React from "react";
import BurgerIngredient from "components/Burger/BurgerIngredient/BurgerIngredient";

export default function(props) {
  return (
    <div>
      {props.ingredients.map((ingredient, i) => (
        <BurgerIngredient type={ingredient} key={ingredient + i} />
      ))}
    </div>
  );
}
