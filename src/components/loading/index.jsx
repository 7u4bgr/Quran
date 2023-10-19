import React from 'react'
import styles from './index.module.css'
import Logo from '../../assets/images/loginlogo.svg'
const Loading = () => {
  return (
    <div className={styles.background}>
        <div className={styles.control}>
          <img src={Logo} alt="Logo" />
        </div>
    </div>
  )
}

export default Loading