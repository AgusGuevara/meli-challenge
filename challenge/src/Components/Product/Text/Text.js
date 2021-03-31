import React from "react";
import PropTypes from "prop-types";

//Styles
import styles from "./Text.module.scss";

const Text = ({
  children,
  fontSize,
  width,
  height,
  fontFamily,
  fontColor,
  fontWeight,
  margin,
  position,
  tag: Tag,
  aria,
}) => {
  return (
    <div
      className={
        position === "list"
          ? styles.positionList
          : position === "detail"
          ? styles.positionDetail
          : position === "listCity"
          ? styles.listCity
          : position === "condition"
          ? styles.condition
          : position === "description"
          ? styles.desc
          : ""
      }
      style={{
        width: width,
        height: height,
        margin: margin,
      }}
    >
      <Tag
        aria-label={aria}
        style={{
          fontSize: `${fontSize}px`,
          color: fontColor,
          fontFamily: fontFamily,
          fontWeight: fontWeight,
        }}
      >
        {children}
      </Tag>
    </div>
  );
};

Text.PropType = {
  px: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontColor: PropTypes.string,
  fontFamily: PropTypes.string,
  margin: PropTypes.shape({
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
  }),
};

export default Text;
