import React from "react";

// Components
import ListItem from "./ListItem/ListItem";
import ProductContainer from "../../Components/Product/ProductContainer/ProductContainer";

// Style

const ListView = () => {
  return (
    <>
      <ProductContainer size="list">
        <ListItem />
      </ProductContainer>
    </>
  );
};

export default ListView;
