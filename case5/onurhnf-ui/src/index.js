import React from "react";
import styles from "./Button.module.css";

export const Button = ({ type, children, onClick }) => {
  //get type from the user
  const className = `${styles.button} ${styles[type]}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
