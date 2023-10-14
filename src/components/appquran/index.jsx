import React from "react";
import styles from "./index.module.css";
import Vector1 from "../../assets/images/vector1.svg";
import Wrapper from "../UI/wrapper";
const AppQuran = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.texts}>
            <h2>Recitering Listening quran is more easy now</h2>
          </div>
        </div>
      </Wrapper>
        <div className={styles.vectors}>
          <img className={styles.img1} src={Vector1} alt="" />
          <img className={styles.img2} src={Vector1} alt="" />
        </div>
    </div>
  );
};

export default AppQuran;
