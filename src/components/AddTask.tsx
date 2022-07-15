import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './AddTask.module.css';

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function AddTask() {
  const [contentTask, setContentTask] = useState<Task[]>([]);
  const [addNewTask, setAddNewTask] = useState('');

  function handleCreateNewTask() {
    if (!addNewTask) return;

    const newTask = {
      id: Math.random(),
      title: addNewTask,
      isCompleted: false,
    };

    setContentTask([...contentTask, newTask]);
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
