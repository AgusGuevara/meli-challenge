import React from "react";
// Components
import Icon from "./Icon/Icon";
import SearchBar from "./SearchBar/SearchBar";
//styles
import styles from "./Header.module.scss";

const Header = ({ toHeaderView }) => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.searchContainer}>
          <Icon />
          <SearchBar setUserInput={(e) => toHeaderView(e)} />
        </div>
      </header>
    </>
  );
};

export default Header;
