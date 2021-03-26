import React from "react";
import PropType from "prop-types";

//Styles
import styles from "./BuyProduct.module.scss";

//Components
import PriceTag from "../../../Components/Product/PriceTag/PriceTag";
import Text from "../../../Components/Product/Text/Text";
import Button from "../../../Components/Product/Button/Button";

const BuyProduct = ({ condition, selled, title, price, decimals }) => {
  return (
    <div className={styles.buyProduct}>
      <Text fontSize="14px" fontColor="#666666" position="condition">
        {condition} - {selled} vendidos
      </Text>
      <Text fontSize="24" fontWeight="bold" position="detail">
        {title}
      </Text>
      <PriceTag price={price} decimals={decimals} size="detail" />
      <Button innerText="Comprar" />
    </div>
  );
};

BuyProduct.PropType = {
  condition: PropType.string,
  selled: PropType.string,
  title: PropType.string,
  price: PropType.string,
  decimals: PropType.string,
};
export default BuyProduct;
