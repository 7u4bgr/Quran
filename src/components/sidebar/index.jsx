import React from "react";
import styles from "./index.module.css";
import { CloseIcon } from "../../icons";
const Sidebar = ({setHamburger,setModal,setSignup}) => {
  function customSetModal(){
    setModal(true)
    setHamburger(false)
    setSignup(false)
  }
  function customSetSignup(){
    setSignup(true)
    setHamburger(false)
    setModal(false)
  }
  return (
    <div className={styles.background}>
      <div onClick={()=>setHamburger(false)}>

      <CloseIcon />
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
        <a onClick={()=>customSetModal()}>
          <li>Login</li>
        </a>
        <a onClick={()=>customSetSignup()}>
          <li>Sign Up</li>
        </a>
       
      </ul>
    </div>
  );
};

export default Sidebar;
