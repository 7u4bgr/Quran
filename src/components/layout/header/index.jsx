import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import Logo from "../../../assets/images/logo.svg";
import { UserIcon } from "../../../icons/";

const Header = () => {
  return (
    <div id="top" className={styles.background}>
      <Wrapper>
        <div className={styles.div}>
          <div className={styles.nav}>
            <div className={styles.logo}>
                
              <div className={styles.image}>
              <a href="https://khuran.vercel.app/">
                <img src={Logo} alt="Logo" />
              </a>
              </div>
              <div className={styles.icons}>
                <UserIcon />
              </div>
            </div>
            <ul>
              <a href="https://khuran.vercel.app/">
                <li>Home</li>
              </a>
              <a href="https://en.wikipedia.org/wiki/Quran" target="_blank">

              <li>About</li>
              </a>
              <a href="https://previous.quran.com/?locale=ur" target="_blank">

              <li>Translation</li>
              </a>
              <a href="https://donate.quran.com/" target="_blank">

              <li>Donate</li>
              </a>
            </ul>
            <div className={styles.login}>
              <button className={styles.button1}>Log in</button>
              <button className={styles.button2}>Sign up</button>
            </div>
          </div>
          <hr className={styles.hr} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
