import React from "react";
import PropTypes from "prop-types";
// Styles
import styles from "./ProductImage.module.scss";

const ProductImage = ({ imageUrl, size, alt }) => {
  const checkSize = (x) => {
    return x === "list" ? styles.list : x === "detail" ? styles.detail : "";
  };

  return (
    <>
      <img
        loading="lazy"
        alt={alt}
        src={imageUrl}
        className={`${styles.imageStyle} ${checkSize(size)}`}
      />
    </>
  );
};

ProductImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ProductImage;
