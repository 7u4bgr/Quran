import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/wrapper";
import Ellipse1 from "../../assets/images/ellipse1.svg";
import Book1 from "../../assets/images/book1.png";
import Book2 from "../../assets/images/book2.png";
import Book3 from "../../assets/images/book3.png";
import Book4 from "../../assets/images/book4.png";
import Button from '../UI/button'
import Khuranpdf from '../../assets/files/Holy-Quran-English.pdf'
const Blog = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.texts}>
            <h2>
              Latest Islamic blog <img src={Ellipse1} alt="Ellipse1" />
            </h2>
            <p>
              Read top free Islamic articles & blog posts on the Internet and
              know about islam.
            </p>
          </div>
          <div className={styles.flex}>
          <div className={styles.control1}>
            <div className={styles.img1}>
              <img src={Book1} alt="Book1" />
            </div>
            <div className={styles.text1}>
              <h2>How many times bismillah repeated in Quran?</h2>
              <hr />
              <p>
                How many times bismillah repeated in Quran? “In the name of God
                the most merciful...
              </p>
              <a href="https://en.wikipedia.org/wiki/Quran_code#:~:text=The%20Quran%20consists%20of%20114,114%20is%2019%C3%976." target="_blank">

              <button>Read More</button>
              </a>
            </div>
          </div>
          <div className={styles.control1}>
            <div className={styles.img1}>
              <img src={Book2} alt="Book2" />
            </div>
            <div className={styles.text1}>
              <h2>How many times bismillah repeated in Quran?</h2>
              <hr />
              <p>
                How many times bismillah repeated in Quran? “In the name of God
                the most merciful...
              </p>
              <a href="https://en.wikipedia.org/wiki/Quran_code#:~:text=The%20Quran%20consists%20of%20114,114%20is%2019%C3%976." target="_blank">

              <button>Read More</button>
              </a>
            </div>
          </div>
          <div className={styles.control1}>
            <div className={styles.img1}>
              <img src={Book3} alt="Book3" />
            </div>
            <div className={styles.text1}>
              <h2>How many times bismillah repeated in Quran?</h2>
              <hr />
              <p>
                How many times bismillah repeated in Quran? “In the name of God
                the most merciful...
              </p>
              <a href="https://en.wikipedia.org/wiki/Quran_code#:~:text=The%20Quran%20consists%20of%20114,114%20is%2019%C3%976." target="_blank">

              <button>Read More</button>
              </a>
            </div>
          </div>
          <div className={styles.control1}>
            <div className={styles.img1}>
              <img src={Book4} alt="Book4" />
            </div>
            <div className={styles.text1}>
              <h2>How many times bismillah repeated in Quran?</h2>
              <hr />
              <p>
                How many times bismillah repeated in Quran? “In the name of God
                the most merciful...
              </p>
              <a href="https://en.wikipedia.org/wiki/Quran_code#:~:text=The%20Quran%20consists%20of%20114,114%20is%2019%C3%976." target="_blank">

              <button>Read More</button>
              </a>
            </div>
          </div>

          </div>
          <div className={styles.button1}>
          <a href="https://previous.quran.com/?locale=ur" target="_blank">

                <Button>
                    Read All
                </Button>
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Blog;
