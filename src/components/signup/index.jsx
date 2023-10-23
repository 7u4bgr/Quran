import React from "react";
import styles from "./index.module.css";
const Signup = ({ setSignup }) => {
  return (
    <>
      <div onClick={() => setSignup(false)} className={styles.overlay}></div>
      <div className={styles.background}>
        <div className={styles.control}>
          <div className={styles.text1}>
            <h2>Registration</h2>
          </div>
          <div className={styles.text2}>
            <div className={styles.text3}>
              <h2>Name</h2>
              <input placeholder="Enter your name" type="text" />
            </div>
            <div className={styles.text3}>
              <h2>Surname</h2>
              <input placeholder="Enter your surname" type="text" />
            </div>
            <div className={styles.text3}>
              <h2>Email</h2>
              <input
                placeholder="Enter your email"
                type="email"
                pattern=".+@globex\.com"
              />
            </div>
            <div className={styles.text3}>
              <h2>Phone Number</h2>
              <input placeholder="Enter your phone number" type="number" />
            </div>
            <div className={styles.text3}>
              <h2>Password</h2>
              <input placeholder="Enter your password" type="password" />
            </div>
            <div className={styles.text3}>
              <h2>Confirm Password</h2>
              <input placeholder="Confirm your password" type="password" />
            </div>
          </div>
          <div className={styles.text4}>
            <h2>Gender</h2>
            <div className={styles.inputs}>
              <div className={styles.input1}>
                <input type="checkbox" />
                <h2>Male</h2>
              </div>
              <div className={styles.input1}>
                <input type="checkbox" />
                <h2>Female</h2>
              </div>
              <div className={styles.input1}>
                <input type="checkbox" />
                <h2>Prefer not to say</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button1}>
          <button onClick={() => setSignup(false)}>Registration</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
