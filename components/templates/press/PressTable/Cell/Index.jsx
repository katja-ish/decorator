import styles from "./Cell.module.css";
import H1Regular from "../../../../atoms/typography/H1/Regular/Index";

const Cell = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <p className={styles.date}>2020</p>
        <H1Regular text={"Номинация"} />
      </div>
      <div className={styles.column}>
        <p className={styles.link}>
          <span>Ссылка на публикацию</span>
        </p>
        <H1Regular
          text={
            "Квартира в Доме Гельриха: винтаж, молдинги и оранжевые кресла в проекте Нателы Манкаевой"
          }
        />
      </div>
      <div className={styles.column}>
        <p className={styles.place}>Россия</p>
        <H1Regular text={"DesignChat"} />
      </div>
    </div>
  );
};

export default Cell;
