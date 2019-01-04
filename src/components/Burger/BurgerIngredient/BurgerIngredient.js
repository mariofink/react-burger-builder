import React from "react";
import styles from "./BurgerIngredient.module.css";

export default function(props) {
  const classNames = [styles.BurgerIngredient, styles[props.type]];
  return <div className={classNames.join(" ")} />;
}
