import React from "react";
import PropTypes from "prop-types";
import styles from "./Error.module.scss";

const Error = ({ inComponent, msg }) => {
  return (
    <div
      className={
        inComponent === "list"
          ? styles.listError
          : inComponent === "detail"
          ? styles.detailError
          : ""
      }
    >
      <p>{msg}</p>
    </div>
  );
};

Error.propTypes = {
  inComponent: PropTypes.string,
};

export default Error;
