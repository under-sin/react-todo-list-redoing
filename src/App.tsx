import { useState } from 'react';
import styles from './App.module.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Task } from './components/Task';
import './global.css';

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      title: 'Comentário',
      isCompleted: false,
    },
  ]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask />
        <Task tasks={tasks} />
      </div>
    </>
  );
}
