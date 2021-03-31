import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ crumbData, inComponent }) => {
  return (
    <>
      <div
        className={
          inComponent === "list"
            ? styles.breadListWrapper
            : inComponent === "detail"
            ? styles.breadDetailWrapper
            : ""
        }
      >
        <ul aria-label="Categorias" className={styles.breadStyle}>
          {crumbData.map((x, key) => {
            return (
              <li className={styles.breadCrumbItem} key={key}>
                {inComponent === "list"
                  ? x.name
                  : inComponent === "detail"
                  ? x.value_name
                  : ""}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

Breadcrumb.PropType = {
  crumbData: PropTypes.array,
  comp: PropTypes.string,
};

export default Breadcrumb;
