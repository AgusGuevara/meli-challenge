import React, { useEffect, useState } from "react";
import { withRouter, useLocation } from "react-router-dom";
import PropType from "prop-types";
import axios from "axios";
// Components
import ListItem from "./ListItem/ListItem";
import ProductContainer from "../../Components/Product/ProductContainer/ProductContainer";
import Breadcrumb from "../../Components/Product/Breadcrumb/Breadcrumb";
import Error from "../../Components/Error/Error";
// Style
import styles from "./ListView.module.scss";

const ListView = () => {
  let location = useLocation();
  const [itemData, setItemData] = useState("");
  const [errorComp, setErrorComp] = useState(false);
  const userInput = location.state.input;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/items?q=${userInput}`)
      .then((response) => {
        const responseData = response.data;
        setItemData([...responseData, responseData]);
      })
      .catch((err) => {
        console.log(err);
        setErrorComp(true);
      });
  }, [userInput]);

  return (
    <div className={styles.position}>
      {errorComp === "" ? (
        <Error msg="Hubo un error al buscar el producto. Asegurate que el campo Busqueda este completo. De lo contrario, intenta buscando nuevamente." />
      ) : (
        ""
      )}
      <nav aria-labelledby="Product-results">
        {itemData && !errorComp ? (
          <ProductContainer size="list">
            {itemData[0].categories ? (
              <Breadcrumb
                inComponent="list"
                crumbData={itemData[0].categories}
              />
            ) : (
              ""
            )}
            <ul style={{ listStyle: "none" }} aria-label="Lista de productos">
              {itemData[0].items.map((item, key) => {
                return (
                  <ListItem
                    position="list"
                    shipping={item.free_shipping}
                    prodId={item.id}
                    key={key}
                    image={item.picture}
                    title={item.title}
                    price={item.price[0].amount}
                    city={item.address}
                    decimals={item.price[0].decimals}
                  />
                );
              })}
            </ul>
          </ProductContainer>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

ListView.PropType = {
  toApp: PropType.func,
};

export default withRouter(ListView);
