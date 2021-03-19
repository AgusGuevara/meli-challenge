import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "./PriceTag.module.scss";

const PriceTag = ({ size, price, currency = "$", shipping }) => {
  const makeStyle = () => {
    return size === "list"
      ? styles.smallTag
      : size === "detail"
      ? styles.bigTag
      : "";
  };

  const containerSize = () => {
    return size === "list"
      ? `${styles.priceTagListContainer}`
      : size === "detail"
      ? `${styles.priceTagDetailContainer}`
      : "";
  };

  return (
    <div className={containerSize()}>
      <span className={makeStyle()}>
        <span className={makeStyle()}>{currency}</span>
        {price}
      </span>
      {shipping === true ? (
        <div href="#" className={styles.shippingLogo} />
      ) : (
        ""
      )}
    </div>
  );
};

PriceTag.propTypes = {
  size: PropTypes.oneOf(["detail", "list"]),
  price: PropTypes.string,
  currency: PropTypes.oneOf([
    "R$",
    "U$S",
    "Bs",
    "$",
    "¢",
    "Q",
    "L",
    "C$",
    "B/",
    "₲",
    "S/",
    "Bs.",
  ]),
  shipping: PropTypes.bool,
};
export default PriceTag;
