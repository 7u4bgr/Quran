import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Ellipse1 from "../../assets/images/ellipse1.svg";
import Ascendig from "../../assets/images/ascendig.svg";
import Button from "../UI/button";
const Read = ({data}) => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.texts}>
          <h2>
            Read holy quran with translations
            <img src={Ellipse1} alt="" />
          </h2>
        </div>
        <div className={styles.sort}>
          <div className={styles.buttons}>
            <button className={styles.button1}>Surah</button>
            <a href="https://quran.com/juz/1" target="_blank">

            <button className={styles.button2}>Juz</button>
            </a>
          </div>
          <div className={styles.ascendig}>
            <p>Sort by:</p>
            <h2>Ascendig</h2>
            <img src={Ascendig} alt="" />
          </div>
        </div>
        <div className={styles.controls}>

      {data.map((item)=>(
        <a key={item.id} href={item.link} className={styles.control} target="_blank">
          <div className={styles.number}>
            <div className={styles.first}>
              <h2>{item.id}</h2>
            </div>
            <div className={styles.fatihah}>
              <h2>{item.title}</h2>
              <p>{item.translate}</p>
            </div>
          </div>
          <div className={styles.texts1}>
            <h2>{item.arab}</h2>
            <p>{item.number}</p>
          </div>
        </a>

      ))}
        </div>
        <a href="https://quran.com/1" target="_blank">

        <div className={styles.showbutton}>
          <Button>
            Show More
          </Button>
        </div>
        </a>
      </Wrapper>
    </div>
  );
};

export default Read;
