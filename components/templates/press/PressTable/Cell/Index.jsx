import styles from "./Cell.module.css";
import H1Regular from "../../../../atoms/typography/H1/Regular/Index";

const Cell = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <p className={styles.date}>2020</p>
        <h1 className={styles.h1}>Номинация</h1>
      </div>
      <div className={styles.column}>
        <p className={styles.link}>
          <span>Ссылка на публикацию</span>
        </p>
        <h1 className={styles.h1}>
          Квартира в Доме Гельриха: винтаж, молдинги и оранжевые кресла в
          проекте Нателы Манкаевой
        </h1>
      </div>
      <div className={styles.column}>
        <p className={styles.place}>Россия</p>
        <h1 className={styles.h1}>DesignChat</h1>
      </div>
    </div>
  );
};

export default Cell;
