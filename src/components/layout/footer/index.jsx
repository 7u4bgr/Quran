import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import Logo from "../../../assets/images/logo.svg";
import {
  AscendigIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../../icons";
const Footer = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.texts}>
          <div className={styles.text1}>
            <img src={Logo} alt="Logo" />
            <p>© 2023 UIHUT All Rights Reserved</p>
            <div className={styles.icons}>
              <div className={styles.facebookicon}>
                <FacebookIcon color={"white"} />
              </div>
              <div className={styles.linkedinicon}>
                <LinkedinIcon />
              </div>
              <div className={styles.twittericon}>
                <TwitterIcon />
              </div>
            </div>
          </div>
          <div className={styles.text2}>
            <h2>Navigate</h2>
            <p>Home</p>
            <p>Reciters</p>
            <p>About Us</p>
            <p>Donate</p>
          </div>
          <div className={styles.text3}>
            <h2>Network</h2>
            <p>QuranicAudio.com</p>
            <p>Salah.com</p>
            <p>Sunnah.com</p>
            <p>Legacy.Quran.com</p>
            <p>Previous.Quran.com</p>
          </div>
          <div className={styles.text4}>
            <h2>Popular Links</h2>
            <p>Ayatul Kursi</p>
            <p>Yaseen</p>
            <p>Al Mulk</p>
            <p>Ar-Rahman</p>
            <p>Al Waqi'ah</p>
            <p>Al Kahf</p>
            <p>Al Muzzammil</p>
          </div>
          <div className={styles.text5}>
            <h2>Resources</h2>
            <p>Mobile Apps</p>
            <p>Developers</p>
            <p>Product Updates</p>
            <p>Feedback</p>
            <p>Help</p>
          </div>
        </div>
        <div className={styles.controlicon}>
            <a href="#top">
          <div className={styles.up}>

            <AscendigIcon color={"white"} />
          </div>
            </a>
        </div>
        <hr />
        <div className={styles.language}>
          <h2>English</h2>
          <div className={styles.up}>
            <AscendigIcon color={"#556561"} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
