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
  const { id } = useParams();
  const [itemData, setItemData] = useState([]);
  const [itemId] = useState(id);
  const [goFetch, setGoFetch] = useState(true);
  const [errorComponent, setErrorComponent] = useState(false);

  useEffect(() => {
    if (goFetch === true) {
      axios
        .get(`http://localhost:8080/api/items/${itemId}`)
        .then((response) => {
          console.log(response);
          if (response.data.triggerError === true) {
            setErrorComponent(true);
          } else if (response.data.length > 0) {
            setItemData(response.data);
          }
        })
        .catch((err) => {
          console.log(err);
          setErrorComponent(true);
        });
      setGoFetch(false);
      console.log(errorComponent);
    }
  }, [itemData, goFetch, itemId, errorComponent]);

  return (
    <BrowserRouter>
      {errorComponent === true && (
        <div className={styles.productView}>
          <Error
            inComponent="detail"
            msg="No encontre ese id dado el id que me diste. Intenta con un id valido!"
          />
        </div>
      )}
      {itemData && itemData.length > 0 ? (
        <div className={styles.productView}>
          <section aria-label="Producto seleccionado">
            <ProductContainer size="detail">
              <BreadCrumb
                inComponent="detail"
                crumbData={itemData[0].item.category}
              />
              <ProductImage
                size="detail"
                imageUrl={itemData[0].item.picture}
                alt={`Esta es una imagen del producto ${itemData[0].item.title}`}
              />
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
          </section>
        </div>
      ) : (
        ""
      )}
    </BrowserRouter>
  );
};

export default withRouter(ProductView);
