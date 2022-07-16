import { CheckCircle, Circle, Trash } from 'phosphor-react';
import styles from './TaskList.module.css';

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TaskListProps {
  id: number;
  title: string;
  isCompleted: boolean;
  onDeleteTask: (onDeleteTask: number) => void;
  onCheckedTask: (onCheckedTask: number) => any;
}

export function TaskList({
  id,
  title,
  isCompleted,
  onDeleteTask,
  onCheckedTask,
}: TaskListProps) {
  function handleDeltetTask() {
    onDeleteTask(id);
  }

  function handleCheckedTask() {
    onCheckedTask(id);
  }

  return (
    <div className={styles.taskListContainer}>
      <div className={styles.wrapperInfoList}>
        <button onClick={handleCheckedTask} className={styles.checkeBox}>
          {isCompleted ? (
            <CheckCircle className={styles.checked} size={22} weight="fill" />
          ) : (
            <Circle className={styles.check} size={22} />
          )}
        </button>
        <span
          className={
            isCompleted ? styles.taskWrapperChecked : styles.taskWrapper
          }
        >
          {title}
        </span>
      </div>
      <button className={styles.deleteTask} onClick={handleDeltetTask}>
        <Trash />
      </button>
    </div>
  );
}
