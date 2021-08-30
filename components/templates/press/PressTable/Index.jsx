import styles from "./PressTable.module.css";
import H2Regular from "../../../atoms/typography/H2/Regular/Index";
import Cell from "./Cell/Index";

const PressTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.column}>
          <H2Regular text={"Год, формат"} />
        </div>
        <div className={styles.column}>
          <H2Regular text={"Публикация"} />
        </div>
        <div className={styles.column}>
          <H2Regular text={"Страна, издание"} />
        </div>
      </div>
      <div className={styles.cellsWrapper}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

export default PressTable;
