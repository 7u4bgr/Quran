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
            <h1>Navigate</h1>
            <a style={{textDecoration:"none"}} href="https://khuran.vercel.app/#top" target="_blank">

            <p>Home</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://en.wikipedia.org/wiki/Quran" target="_blank">

            <p>About</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://previous.quran.com/?locale=ur" target="_blank">

            <p>Translation</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://donate.quran.com/" target="_blank">

            <p>Donate</p>
            </a>
          </div>
          <div className={styles.text3}>
            <h1>Network</h1>
            <a style={{textDecoration:"none"}} href="https://quranicaudio.com/" target="_blank">

            <p>QuranicAudio.com</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://salah.com/" target="_blank">

            <p>Salah.com</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://sunnah.com/" target="_blank">

            <p>Sunnah.com</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://legacy.quran.com/" target="_blank">

            <p>Legacy.Quran.com</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://previous.quran.com/" target="_blank">

            <p>Previous.Quran.com</p>
            </a>
          </div>
          <div className={styles.text4}>
            <h1>Popular Links</h1>
            <a style={{textDecoration:"none"}} href="https://previous.quran.com/ayatul-kursi" target="_blank">

            <p>Ayatul Kursi</p>
            </a>
            <a style={{textDecoration:"none"}} style={{textDecoration:"none"}} href="https://previous.quran.com/surah-ya-sin" target="_blank">

            <p>Yaseen</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://previous.quran.com/surah-al-mulk" target="_blank">

            <p>Al Mulk</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://previous.quran.com/surah-ar-rahman" target="_blank">

            <p>Ar-Rahman</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://previous.quran.com/surah-al-waqiah" target="_blank">

            <p>Al Waqi'ah</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://previous.quran.com/surah-al-kahf" target="_blank">

            <p>Al Kahf</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://previous.quran.com/surah-al-muzzammil" target="_blank">

            <p>Al Muzzammil</p>
            </a>
          </div>
          <div className={styles.text5}>
            <h1>Resources</h1>
            <a style={{textDecoration:"none"}} href="https://apps.apple.com/us/app/muslim-pro-quran-athan-prayer/id388389451" target="_blank">

            <p>Mobile Apps</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/elcin-abdullayev-583861229/" target="_blank">

            <p>Developers</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://apps.apple.com/us/app/muslim-pro-quran-athan-prayer/id388389451" target="_blank">

            <p>Product Updates</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://khuran.vercel.app/">

            <p>Feedback</p>
            </a>
            <a style={{textDecoration:"none"}} href="https://previous.quran.com/support" target="_blank">

            <p>Help</p>
            </a>
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
