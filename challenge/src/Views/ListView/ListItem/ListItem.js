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
      <li aria-label={`Producto -> ${title}`}>
        <Link to={`items/${prodId}`} className={styles.listItemContainer}>
          <ProductImage
            size="list"
            imageUrl={image}
            alt="Esta es una imagen del producto"
          />
          <div
            className={
              position === "list"
                ? styles.titleAndPriceInListWrapper
                : position === "detail"
                ? styles.titleAndPriceInDetailWrapper
                : ""
            }
          >
            <PriceTag
              decimals={decimals}
              shipping={shipping}
              size={position}
              price={price}
            />
            <Text
              fontWeight="normal"
              tag="h1"
              fontSize="18"
              position={position}
            >
              {title}
            </Text>
          </div>
          <div className={styles.city}>
            <Text tag="p" fontSize="14" fontColor="#999999">
              {city}
            </Text>
          </div>
        </Link>
      </li>
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
