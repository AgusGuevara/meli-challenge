import React from "react";
import { withRouter } from "react-router-dom";

// Components
import Header from "../../Components/Header/Header";

// Style
import styles from "./HeaderView.module.scss";

const HeaderView = ({ toApp }) => {
  return (
    <div className={styles.search}>
      <Header toHeaderView={(e) => toApp(e)} />
    </div>
  );
};

export default withRouter(HeaderView);
