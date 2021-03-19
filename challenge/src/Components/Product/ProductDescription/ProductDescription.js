import React from "react";

// Styles
import styles from "./ProductDescription.module.scss";
// Components
import Text from "../Text/Text";
const ProductDescription = () => {
  return (
    <div className={`${styles.descriptionContainer}`}>
      <Text position="description" fontSize="28">
        hola soy el produdescishion
      </Text>
      <Text fontSize="16" fontColor="#666666">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab ut
        sit aliquam veniam architecto dolores at eius? A beatae maxime dolorem
        sed molestiae! Deserunt qui facilis ipsum quis voluptate.
      </Text>
    </div>
  );
};

export default ProductDescription;
