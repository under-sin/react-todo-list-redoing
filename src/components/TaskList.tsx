import { Trash } from 'phosphor-react';
import styles from './TaskList.module.css';

interface TaskListProps {
  content: string;
}

export function TaskList({ content }: TaskListProps) {
  return (
    <div className={styles.taskListContainer}>
      <div className={styles.wrapperInfoList}>
        <input type="checkbox" id="input" />
        <label className={styles.taskWrapper} htmlFor="input">
          {content}
        </label>
      </div>
      <button className={styles.deleteTask}>
        <Trash />
      </button>
    </div>
  );
}
