import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Styles
import styles from "./ListItem.module.scss";
// Components
import ProductImage from "../../../Components/Product/ProductImage/ProductImage";
import Text from "../../../Components/Product/Text/Text";
import PriceTag from "../../../Components/Product/PriceTag/PriceTag";

const ListItem = ({
  image,
  price,
  shipping,
  city,
  title,
  position,
  prodId,
  decimals,
}) => {
  return (
    <>
      <Link to={`/items/${prodId}`} className={styles.listItemContainer}>
        <ProductImage size="list" imageUrl={image} />
        <div
          className={
            position === "list"
              ? styles.textPriceList
              : position === "detail"
              ? styles.textPriceDetail
              : ""
          }
        >
          <PriceTag
            decimals={decimals}
            shipping={shipping}
            size={position}
            price={price}
          />
          <Text fontSize="18" position={position}>
            {title}
          </Text>
        </div>
        <div className={styles.city}>
          <Text fontSize="14" fontColor="#999999">
            Mendoza
          </Text>
        </div>
      </Link>
    </>
  );
};

ListItem.PropType = {
  image: PropTypes.string,
  price: PropTypes.string,
  shipping: PropTypes.string,
  city: PropTypes.string,
  title: PropTypes.string,
  position: PropTypes.string,
  prodId: PropTypes.string,
  decimals: PropTypes.string,
};
export default ListItem;
