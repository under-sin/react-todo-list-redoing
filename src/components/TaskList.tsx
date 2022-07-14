import { Trash } from 'phosphor-react';
import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <div className={styles.taskListContainer}>
      <div className={styles.wrapperInfoList}>
        <input type="checkbox" id="input" />
        <label className={styles.taskWrapper} htmlFor="input">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </label>
      </div>
      <Trash />
    </div>
  );
}
