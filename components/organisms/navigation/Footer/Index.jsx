import H2Regular from "../../../atoms/typography/H2/Regular/Index";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.row}>
          <div className={[styles.itemContainer, styles.place].join(" ")}>
            <h3 className={styles.subtitle}>Москва</h3>
            <div className={styles.item}>
              <H2Regular
                text={"Филипповский переулок, 11 стр. 1 Метро Арбатская"}
              />
            </div>
          </div>

          <div className={styles.itemContainer}>
            <div className={styles.subtitle}>
              <a href="tel:+7 (495) 691-68-85"> +7 (495) 691-68-85</a>
              <br />
              <a href="mailto:decorator-n@gmail.com">decorator-n@gmail.com</a>
            </div>
          </div>

          <div className={styles.itemContainer}>
            <h3 className={styles.subtitle}>Декоратор N</h3>
            <div className={styles.item}>
              <H2Regular text={`2009–${new Date().getFullYear()}`} />
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={[styles.itemContainer, styles.time].join(" ")}>
            <h3 className={styles.subtitle}>Часы работы</h3>
            <div className={styles.item}>
              <H2Regular text={`Пн–Пт`} />
              <H2Regular text={`С 10:00 до 19:00`} />
            </div>
          </div>

          <div className={styles.itemContainer}>
            <div className={styles.socials}>
              <div className={styles.icon}>
                <a href="https://instagram.com/" target="_blank">
                  <Image
                    src={"/icons/instagram.svg"}
                    layout={"fill"}
                    className={styles.iconSvg}
                  />
                </a>
              </div>
              <div className={styles.icon}>
                <a href="https://facebook.com/">
                  <Image
                    src={"/icons/facebook.svg"}
                    layout={"fill"}
                    className={styles.iconSvg}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.itemContainer}>
            <h3 className={styles.subtitle}>MURADOV/LINDE</h3>
            <div className={styles.item}>
              <H2Regular text={"Партнеры"} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          width="600"
          height="450"
          style="border:0"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?Space+Needle,Seattle+WA"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
