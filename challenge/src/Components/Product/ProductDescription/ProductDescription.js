import React from "react";

// Styles
import styles from "./ProductDescription.module.scss";
// Components
import Text from "../Text/Text";
const ProductDescription = ({ descTitle, descText }) => {
  return (
    <div className={`${styles.descriptionContainer}`}>
      <Text position="description" fontSize="28">
        {descTitle}
      </Text>
      <div className={styles.descriptionWrapper}>
        <span className={styles.description} fontSize="16" fontcolor="#666666">
          {descText}
        </span>
      </div>
    </div>
  );
};

export default ProductDescription;
