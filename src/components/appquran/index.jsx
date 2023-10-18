import React from "react";
import styles from "./index.module.css";
import Vector1 from "../../assets/images/vector1.svg";
import Wrapper from "../UI/wrapper";
import Ellipse2 from "../../assets/images/ellipse2.svg";
import Google from "../../assets/images/google.svg";
import Appstore from "../../assets/images/appstore.svg";

const AppQuran = () => {
  return (
    <div className={styles.background}>
      <div className={styles.vectors}>
        <img className={styles.img1} src={Vector1} alt="" />
        <img className={styles.img2} src={Vector1} alt="" />
      </div>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.texts}>
            <h2>
              Recitering Listening quran is more easy now{" "}
              <img src={Ellipse2} alt="" />
            </h2>
            <p>
              The Quran, also romanized Qur'an or Koran, is the central
              religious text of Islam, believed by Muslims to be a revelation
              from Allah.
            </p>
          </div>
        <div className={styles.application}>
          <a href="https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro&hl=en_US&pli=1" target="_blank">

            <img src={Google} alt="Google" />
          </a>
          <a href="https://apps.apple.com/us/app/muslim-pro-quran-athan-prayer/id388389451" target="_blank">

            <img src={Appstore} alt="Appstore" />
          </a>
        </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AppQuran;
