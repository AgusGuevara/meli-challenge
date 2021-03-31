import React from "react";
import PropTypes from "prop-types";
// Components
import SearchBar from "./SearchBar/SearchBar";
//styles
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
      </header>
    </>
  );
};

Header.PropType = {
  toHeaderView: PropTypes.func,
};

export default Header;
