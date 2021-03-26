import React from "react";
import PropType from "prop-types";

// Styles
import styles from "./ProductContainer.module.scss";

const ProductContainer = ({ size, children }) => {
  const checkSize = () => {
    return size === "list"
      ? `${styles.listStyle}`
      : size === "detail"
      ? `${styles.detailStyle}`
      : "";
  };
  return <div className={checkSize(size)}>{children}</div>;
};

ProductContainer.PropType = {
  size: PropType.oneOf(["list", "detail"]),
  children: PropType.element,
};

export default ProductContainer;
