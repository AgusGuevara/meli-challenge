import React from "react";

// Styles
import styles from "./Icon.module.scss";

const Icon = () => {
  return (
    <a href="/" className={styles.iconWrapper}>
      <div className={styles.iconStyle} />
    </a>
  );
};

export default Icon;
