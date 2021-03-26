import React, { useEffect, useState } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";

// Style
import styles from "./ProductView.module.scss";
// Components
import axios from "axios";
import ProductContainer from "../../Components/Product/ProductContainer/ProductContainer";
import ProductImage from "../../Components/Product/ProductImage/ProductImage";
import BuyProduct from "./BuyProduct/BuyProduct";
import ProductDescription from "../../Components/Product/ProductDescription/ProductDescription";
import BreadCrumb from "../../Components/Product/Breadcrumb/Breadcrumb";
import Error from "../../Components/Error/Error";

const ProductView = () => {
  const [itemData, setItemData] = useState();
  const { id } = useParams();
  const [itemId] = useState(id);
  const [goFetch, setGoFetch] = useState(true);
  const [errorComp, setErrorComp] = useState(false);

  const getRenderData = () => {
    return axios
      .get(`http://localhost:8080/api/items/${itemId}`)
      .then((response) => {
        console.log(response.data);
        setItemData(response.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setErrorComp(true);
        }
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("soy product view");
    if (goFetch === true) {
      getRenderData();
      setGoFetch(false);
    }
  });

  return (
    <BrowserRouter>
      {itemData ? (
        <div className={styles.productView}>
          {errorComp ? <Error /> : ""}
          <ProductContainer size="detail">
            <BreadCrumb comp="detail" crumbData={itemData[0].item.category} />
            <ProductImage size="detail" imageUrl={itemData[0].item.picture} />
            <BuyProduct
              condition={itemData[0].item.condition}
              selled={itemData[0].item.sold_quantity}
              price={itemData[0].item.price.amount}
              decimals={itemData[0].item.price.decimals}
              title={itemData[0].item.title}
            />
            <ProductDescription
              descText={itemData[0].item.description}
              descTitle="Detalle del producto"
            />
          </ProductContainer>
        </div>
      ) : (
        ""
      )}
    </BrowserRouter>
  );
};

export default withRouter(ProductView);
