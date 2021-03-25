import React, { useEffect, useState } from "react";
import { withRouter, useLocation } from "react-router-dom";
import axios from "axios";
// Components
import ListItem from "./ListItem/ListItem";
import ProductContainer from "../../Components/Product/ProductContainer/ProductContainer";

// Style
const ListView = ({ toApp }) => {
  let location = useLocation();
  const [userInput, setUserInput] = useState(location.state.input);
  const [itemData, setItemData] = useState("");
  const [goFetch, setGoFetch] = useState(true);

  const getlistData = () => {
    axios
      .get(`http://localhost:5000/api/items?q=${userInput}`)
      .then((response) => {
        console.log("response de list " + response.data[0]);
        const respu = response.data;
        setItemData(respu);
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
    <>
      {itemData ? (
        <ProductContainer size="list">
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
    </>
  );
};

export default withRouter(ListView);

// itemData[0].items
