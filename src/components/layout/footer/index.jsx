import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import Logo from "../../../assets/images/logo.svg";
import {
  AscendigIcon,
  İnstagramIcon,
  LinkedinIcon,
  GmailIcon,
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
              <a href="https://www.instagram.com/abdlyvs/" target="_blank">
                <div className={styles.instagramicon}>
                  <İnstagramIcon color={"white"} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/elcin-abdullayev-583861229/"
                target="_blank"
              >
                <div className={styles.linkedinicon}>
                  <LinkedinIcon />
                </div>
              </a>
              <a href="mailto:abdllyevv@gmail.com">
                <div className={styles.gmailicon}>
                  <GmailIcon />
                </div>
              </a>
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
            <a href="https://quranicaudio.com/" target="_blank">

            <p>QuranicAudio.com</p>
            </a>
            <a href="https://salah.com/" target="_blank">

            <p>Salah.com</p>
            </a>
            <a href="https://sunnah.com/" target="_blank">

            <p>Sunnah.com</p>
            </a>
            <a href="https://legacy.quran.com/" target="_blank">

            <p>Legacy.Quran.com</p>
            </a>
            <a href="https://previous.quran.com/" target="_blank">

            <p>Previous.Quran.com</p>
            </a>
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
