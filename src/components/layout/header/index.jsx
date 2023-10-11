import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import Logo from "../../../assets/images/logo.svg";
import { UserIcon } from "../../../icons/";
const Header = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.div}>
          <div className={styles.nav}>
            <div className={styles.logo}>
              <div className={styles.image}>
                <img src={Logo} alt="Logo" />
              </div>
              <div className={styles.icons}>
                <UserIcon />
              </div>
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Translation</li>
              <li>Donate</li>
            </ul>
            <div className={styles.login}>
              <button className={styles.button1}>Log in</button>
              <button className={styles.button2}>Sign up</button>
            </div>
          </div>
          <hr className={styles.hr}/>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
