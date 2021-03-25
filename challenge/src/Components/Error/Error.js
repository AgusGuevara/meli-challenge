import React from "react";
import styles from "./Error.module.scss";

const Error = (position) => {
  return (
    <div
      className={
        position === "list"
          ? styles.listError
          : position === "detail"
          ? styles.detailError
          : ""
      }
    >
      Hubo en error al cargar la vista. Chequea que los datos ingresados esten
      correctos!
    </div>
  );
};

export default Error;
