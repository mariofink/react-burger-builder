import React from "react";
import styles from "./Modal.module.css";

export default function(props) {
  let classes = [styles.Modal];
  if (props.show === true) {
    classes.push(styles.shown);
  } else {
    classes.push(styles.hidden);
  }
  return <div className={classes.join(" ")}>{props.children}</div>;
}
