import styles from "./Header.module.css";
import H1Regular from "../../../atoms/typography/H1/Regular/Index";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.item}>
            <H1Regular text={"Декоратор N"} />
          </div>
        </Link>
        <div className={[styles.item, styles.active].join(" ")}>
          <H1Regular text={"Публикации"} />
        </div>
        <div className={styles.item}>
          <H1Regular text={"Меню"} />
        </div>
      </div>
      <div className={styles.border} />
    </div>
  );
};

export default Header;
