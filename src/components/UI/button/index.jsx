import React from "react";
import styles from "./index.module.css";
const Button = ({ children, color='yellow' }) => {
  return (
    <>
      {color === "yellow" ? (
        <button className={styles.yellowbutton}>{children}</button>
      ) :null 
        }
        {color === 'transparent'?(
          <button className={styles.transparentbutton}>{children}</button>

        ):null}
    </>
  );
};

export default Button;
