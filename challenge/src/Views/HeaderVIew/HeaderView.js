import React from "react";
import PropType from "prop-types";
import { withRouter } from "react-router-dom";

// Components
import Header from "../../Components/Header/Header";

// Style
import styles from "./HeaderView.module.scss";

const HeaderView = () => {
  return (
    <div className={styles.search}>
      <Header />
    </div>
  );
};

HeaderView.PropType = {
  toApp: PropType.func,
};

export default withRouter(HeaderView);
