import React, { useState } from "react";
import { Link } from "react-router-dom";
//Styles
import styles from "./SearchBar.module.scss";

import Loupe from "../Loupe/Loupe";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <form className={styles.inputWrapper}>
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
          // className={styles.btnStyle}
        />
      </form>
    </>
  );
};

export default SearchBar;
