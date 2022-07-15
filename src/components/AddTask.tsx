import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './AddTask.module.css';

interface AddTaskProps {
  taskContent: (content: string[]) => void;
}

export function AddTask({ taskContent }: AddTaskProps) {
  const [contentTask, setContentTask] = useState(['Task inicial']);
  const [addNewTask, setAddNewTask] = useState('');

  contentTask.forEach((content) => {
    console.log(content);
  });

  function handleCreateNewTask() {
    setContentTask([...contentTask, addNewTask]);
    setAddNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setAddNewTask(event.target.value);
  }

  return (
    <div className={styles.AddTaskContainer}>
      <input
        type="text"
        value={addNewTask}
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
      />
      <button onClick={handleCreateNewTask} type="submit">
        Criar
        <PlusCircle size={18} weight="bold" />
      </button>
    </div>
  );
}
