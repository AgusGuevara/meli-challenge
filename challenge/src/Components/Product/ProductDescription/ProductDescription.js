import React from "react";
import PropType from "prop-types";
// Styles
import styles from "./ProductDescription.module.scss";
// Components
import Text from "../Text/Text";

const ProductDescription = ({ descTitle, descText }) => {
  return (
    <article className={`${styles.descriptionContainer}`}>
      <Text tag="h1" position="description" fontSize="28">
        {descTitle}
      </Text>
      <div className={styles.descriptionWrapper}>
        <Text
          tag="p"
          aria="Descripcion del producto"
          className={styles.description}
          fontSize="16"
          fontcolor="#666666"
        >
          {descText}
        </Text>
      </div>
    </article>
  );
};

ProductDescription.PropType = {
  descTitle: PropType.string,
  descText: PropType.string,
};

export default ProductDescription;
