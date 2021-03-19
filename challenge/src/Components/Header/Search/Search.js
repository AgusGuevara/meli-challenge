import React from "react";
// Components
import Icon from "../Icon/Icon";
import SearchBar from "../SearchBar/SearchBar";

// style
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <Icon />
      <SearchBar />
    </div>
  );
};

export default Search;
