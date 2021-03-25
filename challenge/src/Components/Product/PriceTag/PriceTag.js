import React from "react";
// import PropTypes from "prop-types";

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
    <div className={`${componentSize()}`}>
      <span className={`${componentSize()}`}>{currency}</span>
      <span className={componentSize()}>{price}</span>
      <span>.{decimals}</span>
      {shipping === true ? <div className={styles.shippingLogo} /> : ""}
    </div>
  );
};

// PriceTag.propTypes = {
//   size: PropTypes.oneOf(["detail", "list"]),
//   price: PropTypes.string,
//   currency: PropTypes.oneOf([
//     "R$",
//     "U$S",
//     "Bs",
//     "$",
//     "¢",
//     "Q",
//     "L",
//     "C$",
//     "B/",
//     "₲",
//     "S/",
//     "Bs.",
//   ]),
//   shipping: PropTypes.bool,
// };
export default PriceTag;
