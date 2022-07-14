import { PlusCircle } from 'phosphor-react';
import styles from './AddTask.module.css';

export function AddTask() {
  return (
    <div className={styles.AddTaskContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <PlusCircle size={18} weight="bold" />
      </button>
    </div>
  );
}
