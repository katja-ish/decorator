import styles from "./Header.module.css";
import H1Regular from "../../../atoms/typography/H1/Regular/Index";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/" scroll={false}>
          <div className={styles.item}>
            <H1Regular text={"Декоратор N"} />
          </div>
        </Link>
        <div className={styles.right}>
          <Link href="/projects" scroll={false}>
            <div className={[styles.item, styles.active].join(" ")}>
              <H1Regular text={"Проекты"} />
            </div>
          </Link>
          <Link href="/press" scroll={false}>
            <div className={styles.item}>
              <H1Regular text={"Публикации"} />
            </div>
          </Link>
          <Link href="/about" scroll={false}>
            <div className={styles.item}>
              <H1Regular text={"О нас"} />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.border} />
    </div>
  );
};

export default Header;
