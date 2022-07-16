import { useState } from 'react';
import styles from './App.module.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Task } from './components/Task';
import './global.css';

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

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

  function onCheckedTask(taskId: number): any {
    const newTask = tasks.map((task) => {
      if (task.id === taskId)
        return { ...task, isCompleted: !task.isCompleted };

      return task;
    });

    setTasks(newTask);

    console.log(newTask);
  }

  function onDeleteTask(idTask: number) {
    const updatedTask = tasks.filter((task) => task.id !== idTask);
    setTasks(updatedTask);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Task
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          onCheckedTask={onCheckedTask}
        />
      </div>
    </>
  );
}
