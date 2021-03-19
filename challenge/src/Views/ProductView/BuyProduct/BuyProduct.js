import React from "react";

//Styles
import styles from "./BuyProduct.module.scss";

//Components
import PriceTag from "../../../Components/Product/PriceTag/PriceTag";
import Text from "../../../Components/Product/Text/Text";
import Button from "../../../Components/Product/Button/Button";

const BuyProduct = ({ condition, selled }) => {
  return (
    <div className={styles.buyProduct}>
      <Text fontSize="14px" fontColor="#666666" position="condition">
        {(condition = "Nuevo")} - {(selled = "200")} vendidos
      </Text>
      <Text fontSize="24" fontWeight="bold" position="detail">
        Iphone re piola re cheto
      </Text>
      <PriceTag price="15000" size="detail" />
      <Button innerText="Comprar" />
    </div>
  );
};

export default BuyProduct;
