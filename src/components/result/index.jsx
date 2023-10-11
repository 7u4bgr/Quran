import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Results = () => {
  const [counterOn,setCounterOn]=useState(false);
  // function randomIntFromInterval(min, max) { // min and max included
  //     return Math.floor(Math.random() * (max - min + 1) + min)
  //   }

  //   const rndInt = randomIntFromInterval(1, 30)
  //   console.log(rndInt)
  return (
    /* <CountUp
    start={-875.039}
    end={160527.012}
    duration={2.75}
    separator=" "
    decimals={4}
    decimal=","
    prefix="EUR "
    suffix=" left"
    onEnd={() => console.log("Ended! 👏")}
    onStart={() => console.log("Started! 💨")}
    >
    {({ countUpRef, start }) => (
      <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
      </div>
            )}
          </CountUp> */
          <div className={styles.background}>
          <Wrapper>
          <div className={styles.control}>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className={styles.chapters}>
              <h2>
                {counterOn && <CountUp duration={5} delay={0} end={30} />}
                
              </h2>
              <p>Quran’s Chapters</p>
            </div>
            <hr />
            <div className={styles.chapters}>
              <h2>
                {counterOn && <CountUp duration={5} delay={0} end={114} />}
              </h2>
              <p>Quran’s Surahs</p>
            </div>
            <hr />
            <div className={styles.chapters}>
              <h2>
                {counterOn && <CountUp duration={5} delay={0} end={6666} />}
                
              </h2>
              <p>Quran’s Verses</p>
            </div>
            <hr />
            <div className={styles.chapters}>
              <h2>
                {counterOn && <CountUp duration={5} delay={0} end={86} />}
              </h2>
              <p>Makki Surahs</p>
            </div>
            <hr />
            <div className={styles.chapters}>
              <h2>
                {counterOn && <CountUp duration={5} delay={0} end={28} />}
                
              </h2>
              <p>Madani Surahs</p>
            </div>
        </ScrollTrigger>
          </div>
      </Wrapper>
    </div>
  );
};

export default Results;
