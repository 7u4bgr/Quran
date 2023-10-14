import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Ellipse1 from "../../assets/images/ellipse1.svg";
import Imam1 from "../../assets/images/imam1.png";
import Imam2 from "../../assets/images/imam2.png";
import Imam3 from "../../assets/images/imam3.png";
import Button from "../UI/button";
import { AscendigIcon } from "../../icons";
const Imam = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.texts}>
            <h2>
              Listen by your favorite Reciters
              <img src={Ellipse1} alt="Ellipse1" />
            </h2>
            <p>
              Listen holy quran by your favourite reciters and feel the best of
              quran.
            </p>
          </div>
          
          
        </div>
      </Wrapper>
      <div className={styles.images}>
            <div className={styles.img1}>
              <img src={Imam1} alt="" />
            </div>
            <div className={styles.img2}>
              <img src={Imam2} alt="" />
            </div>
            <div className={styles.img3}>
              <img src={Imam3} alt="" />
              <div className={styles.text1}>
                <h2>Abdul Rahman Al-Sudais</h2>
                <p>Imam of Masjid al-Haram</p>
                <div className={styles.buttons}>
                  <Button>Listen Now</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.icons}>
            <div className={styles.iconsback1}>
              <AscendigIcon color={"white"} />
            </div>
            <div className={styles.round}>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div className={styles.iconsback2}>
              <AscendigIcon color={"#1c3f39"} />
            </div>
          </div>
    </div>
  );
};

export default Imam;
