import React from "react";
import PropTypes from "prop-types";
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

Error.propTypes = {
  position: PropTypes.string,
};

export default Error;
