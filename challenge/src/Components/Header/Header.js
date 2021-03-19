import React from "react";
// Components
import Search from "./Search/Search";
//styles
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <Search />
      </header>
    </>
  );
};

export default Header;
