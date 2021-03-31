import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "./PriceTag.module.scss";

const PriceTag = ({
  size,
  price,
  currency = "$",
  shipping,
  decimals = "00",
}) => {
  const componentSize = () => {
    return size === "list"
      ? `${styles.priceTagList}`
      : size === "detail"
      ? `${styles.priceTagDetail}`
      : "";
  };

  return (
    <section aria-label="Precio del producto" className={componentSize()}>
      <p className={componentSize()}>{currency}</p>
      <p className={componentSize()}>{price}</p>
      <p className={styles.listDecimals}>.{decimals}</p>
      {shipping === true ? <div className={styles.shippingLogo} /> : ""}
    </section>
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
