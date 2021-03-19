import React from "react";

// Styles
import styles from "./Icon.module.scss";

const Icon = () => {
  return (
    <div className={styles.iconWrapper}>
      <div className={styles.iconStyle} />
    </div>
  );
};

//en esta ocasion no pude (no tengo idea el porque) importar la imagen con un img tag. de serlo posible asi lo hubiera hecho de esa forma.

export default Icon;
