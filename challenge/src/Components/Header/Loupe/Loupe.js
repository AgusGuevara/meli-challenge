import React from "react";
import { Link } from "react-router-dom";
// styles
import styles from "./Link.module.scss";

const Loupe = ({ to }) => {
  return (
    <div className={styles.link}>
      <Link to={to} className={styles.inner} />
    </div>
  );
};
export default Loupe;
