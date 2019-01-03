import React from "react";
import styles from "./Layout.module.css";
import BurgerBuilder from "containers/BurgerBuilder/BurgerBuilder";

export default () => (
  <div className={styles.Layout}>
    <header>
      <h1>Burger Builder</h1>
    </header>
    <main>
      <BurgerBuilder />
    </main>
  </div>
);
