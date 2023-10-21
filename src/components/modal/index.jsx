import React from "react";
import styles from "./index.module.css";
const Modal = ({ setModal }) => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.text1}>
          <h2>Login</h2>
        </div>
        <div className={styles.text2}>
          <div className={styles.text3}>
            <h2>E-mail</h2>
            <input placeholder="Enter your email" type="email" pattern=".+@globex\.com" />
          </div>
          <div className={styles.text3}>
            <h2>Password</h2>
            <input placeholder="Enter your password" type="password" />
          </div>
        </div>
       
      </div>
      <div className={styles.button1}>
        
      <button onClick={() => setModal(false)}>Login</button>
      </div>
    </div>
    

     
    
  );
};

export default Modal;
