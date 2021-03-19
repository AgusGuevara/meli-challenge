import React from "react";

// Styles
import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ crumb = ["hola", "soy", "un", "breadcrumb"] }) => {
  return (
    <div className={styles.breadWrapper}>
      <ul className={styles.breadStyle}>
        {crumb.map((x) => {
          return (
            <li>
              <a href="x">- {x} -</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
