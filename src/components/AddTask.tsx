import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './AddTask.module.css';

interface Task {
  title: string;
}

interface AddTaskProps {
  handleTaskAddition: (title: string) => void;
}

export function AddTask({ handleTaskAddition }: AddTaskProps) {
  const [addNewTask, setAddNewTask] = useState('');

  function handleCreateNewTask() {
    if (!addNewTask) return;

    handleTaskAddition(addNewTask);
    setAddNewTask('');
  }

  return (
    <div className={styles.AddTaskContainer}>
      <input
        type="text"
        value={addNewTask}
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setAddNewTask(e.target.value)}
      />
      <button onClick={handleCreateNewTask} type="submit">
        Criar
        <PlusCircle size={18} weight="bold" />
      </button>
    </div>
  );
}
