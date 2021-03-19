import React from "react";
import PropTypes from "prop-types";
// Styles
import styles from "./ProductImage.module.scss";

const ProductImage = ({ imageUrl, size, alt, margin }) => {
  // should've built an image component
  const defaultStyles = {
    background: `url("${imageUrl}")`,
    width: `${size.width}`,
    height: `${size.height}`,
  };

  return (
    <>
      <div style={defaultStyles} className={styles.imageStyle} />
    </>
  );
};

ProductImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ProductImage;
