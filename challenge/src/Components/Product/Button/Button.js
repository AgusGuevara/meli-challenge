import React from "react";
import PropType from "prop-types";
//Styles
import styles from "./Button.module.scss";

const Button = ({ innerText }) => {
  return (
    <>
      <button className={styles.buyBtn}>{innerText}</button>
    </>
  );
};

Button.PropType = {
  innerText: PropType.string,
};

export default Button;
