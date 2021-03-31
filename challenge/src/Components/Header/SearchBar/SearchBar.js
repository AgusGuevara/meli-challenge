import React, { useState } from "react";
//Styles
import styles from "./SearchBar.module.scss";

import Loupe from "../Loupe/Loupe";
import Icon from "../Icon/Icon";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Icon />
      <form aria-label="Search form" className={styles.inputWrapper}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.inputStyle}
          placeholder="Nunca dejes de buscar"
        />
        <Loupe
          to={{
            pathname: "/items",
            search: `search=${searchValue}`,
            state: { input: searchValue },
          }}
        />
      </form>
    </>
  );
};

export default SearchBar;
