import React from "react";
import styles from "./index.module.css";
import Header from "../../layout/header";
const Wrapper = (props) => {
  return (
    <div className={styles.div}>
      <div className={styles.divpt}>{props.children}</div>
    </div>
  );
};

export default Wrapper;
