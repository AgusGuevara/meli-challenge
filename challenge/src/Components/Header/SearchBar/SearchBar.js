import React from "react";

//Styles
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputStyle}
          placeholder="Nunca dejes de buscar"
          type="text"
        />
        <button className={styles.btnStyle} />
      </div>
    </>
  );
};

export default SearchBar;
