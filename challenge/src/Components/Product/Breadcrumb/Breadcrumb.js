import React from "react";
import PropTypes from "prop-types";

// Styles
import styles from "./Breadcrumb.module.scss";

const Breadcrumb = ({ crumbData, comp }) => {
  return (
    <div
      className={
        comp === "list"
          ? styles.breadListWrapper
          : comp === "detail"
          ? styles.breadDetailWrapper
          : ""
      }
    >
      <ul className={styles.breadStyle}>
        {crumbData.map((x, key) => {
          return (
            <li className={styles.breadCrumbItem} key={key}>
              {comp === "list" ? x.name : comp === "detail" ? x.value_name : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Breadcrumb.PropType = {
  crumbData: PropTypes.array,
  comp: PropTypes.string,
};

export default Breadcrumb;
