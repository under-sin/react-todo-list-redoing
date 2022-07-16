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
      title: 'Ir no dentista',
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: 'Comprar verdura',
      isCompleted: false,
    },
  ]);

  function handleTaskAddition(taskTitle: string): void {
    const newTask = [
      ...tasks,
      {
        id: Math.random(),
        title: taskTitle,
        isCompleted: false,
      },
    ];

    setTasks(newTask);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Task tasks={tasks} />
      </div>
    </>
  );
}
