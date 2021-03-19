import React from "react";

//Styles
import styles from "./Button.module.scss";

const Button = ({ innerText }) => {
  return (
    <>
      <button className={styles.buyBtn}>{innerText}</button>
    </>
  );
};

export default Button;
