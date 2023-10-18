import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Holyquran from "../../assets/images/holyquran.png";
import Holyread from "../../assets/images/holyread.png";
import Ellipse from "../../assets/images/ellipse.svg";
import Button from '../UI/button'
const Holy = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.images}>
            <img className={styles.holyquran} src={Holyquran} alt="" />
            <img className={styles.holyread} src={Holyread} alt="" />
          </div>
          <div className={styles.texts}>
            <h2>About holy quran <img src={Ellipse} alt="" /></h2>
            <p>
              The Quran, also romanized Qur'an or Koran, is the central
              religious text of Islam, believed by Muslims to be a revelation
              from Allah. It is organized in 30 chapters, 114 surahs which
              consist of 6666 verses.
            </p>
            <p>
              In addition to its religious significance, it is widely regarded
              as the finest work in Arabic literature.
            </p>
            <a href="https://en.wikipedia.org/wiki/Quran" target="_blank">

            <Button>
                
                Learn More
            </Button>
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Holy;
