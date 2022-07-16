import { Trash } from 'phosphor-react';
import styles from './TaskList.module.css';

interface TaskListProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function TaskList({ id, title, isCompleted }: TaskListProps) {
  return (
    <div className={styles.taskListContainer}>
      <div className={styles.wrapperInfoList}>
        <input type="checkbox" id="input" />
        <label className={styles.taskWrapper} htmlFor="input">
          {title}
        </label>
      </div>
      <button className={styles.deleteTask}>
        <Trash />
      </button>
    </div>
  );
}
