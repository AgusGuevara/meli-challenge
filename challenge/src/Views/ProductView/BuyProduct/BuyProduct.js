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
    <section aria-label="Info para comprar" className={styles.buyProduct}>
      <Text tag="p" fontSize="14px" fontColor="#666666" position="condition">
        {condition === "new" ? "Nuevo" : "Usado"} - {selled} vendidos
      </Text>
      <Text tag="p" fontSize="24" fontWeight="bold" position="detail">
        {title}
      </Text>
      <PriceTag price={price} decimals={decimals} size="detail" />
      <Button innerText="Comprar" />
    </section>
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
