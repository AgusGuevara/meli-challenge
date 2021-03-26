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

const ListView = ({ toApp }) => {
  let location = useLocation();
  const [userInput, setUserInput] = useState(location.state.input);
  const [itemData, setItemData] = useState("");
  const [goFetch, setGoFetch] = useState(true);
  const [errorComp, setErrorComp] = useState(false);
  const getlistData = () => {
    axios
      .get(`http://localhost:8080/api/items?q=${userInput}`)
      .then((response) => {
        const responseData = response.data;
        setItemData(responseData);
      })
      .catch((err) => {
        console.log(err);
        setErrorComp(true);
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (goFetch === true) {
      getlistData();
      setGoFetch(false);
    }
  });

  return (
    <div className={styles.position}>
      {errorComp || userInput === "" ? <Error /> : ""}
      {itemData ? (
        <ProductContainer size="list">
          {itemData[0].categories ? (
            <Breadcrumb comp="list" crumbData={itemData[0].categories} />
          ) : (
            ""
          )}
          {itemData[0].items.map((item, key) => {
            return (
              <ListItem
                position="list"
                shipping={item.free_shipping}
                toListView={(e) => toApp(e)}
                prodId={item.id}
                key={key}
                image={item.picture}
                title={item.title}
                price={item.price[0].amount}
                decimals={item.price[0].decimals}
              />
            );
          })}
        </ProductContainer>
      ) : (
        ""
      )}
    </div>
  );
};

ListView.PropType = {
  toApp: PropType.func,
};

export default withRouter(ListView);
