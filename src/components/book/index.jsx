import React from 'react';
import styles from './index.module.css';
import Wrapper from '../UI/wrapper';
import Vector from '../../assets/images/vector.svg';
import Ellipse from '../../assets/images/ellipse.svg';
import { AudioIcon, ReadIcon } from '../../icons';
import Button from '../UI/button';
import Quran from '../../assets/images/quran.png';
import Read from '../../assets/images/read.png';
const Book = () => {
  return (
    <div className={styles.background}>
      <div className={styles.images}>
        <img className={styles.image1} src={Vector} alt='Logo' />
        <img className={styles.image2} src={Vector} alt='Logo' />
      </div>
      <Wrapper>
        <div className={styles.div}>
          <div className={styles.text}>
            <h2>Make self-purification by reading Quran <img src={Ellipse} alt="Ellipse" /></h2>
            <p>
              Make self-purification by reading Quran. This website is all about
              holy quran. You can read, you can listen and you can learn so many
              things about Islam.
            </p>
          </div>
          <div className={styles.buttons}>
            <Button>
              <div className={styles.button1}>
                <ReadIcon />
                <span>Read Quran</span>
              </div>
            </Button>
            <Button color='transparent'>
              <div className={styles.button2}>
                <AudioIcon />
                <span>Quran Audio</span>
              </div>
            </Button>
          </div>
          <div className={styles.qurans}>
              <img className={styles.quran} src={Quran} alt="" />
              <img className={styles.readquran} src={Read} alt="" />
            </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Book;
