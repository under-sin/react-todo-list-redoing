import { useState } from 'react';
import clipBoard from '../assets/Clipboard.svg';
import styles from './Task.module.css';
import { TaskList } from './TaskList';

interface Tasks {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TasksProps {
  tasks: Tasks[];
  onDeleteTask: (onDeleteTask: number) => void;
  onCheckedTask: (onCheckedTask: number) => any;
}

export function Task({ tasks, onDeleteTask, onCheckedTask }: TasksProps) {
  const totalTasks = tasks.length;
  let taskConcluid = 0;
  tasks.map((task) => {
    if (task.isCompleted === true) {
      taskConcluid++;
    }
  });

  return (
    <div className={styles.containerTasks}>
      <div className={styles.progressTasks}>
        <strong className={styles.createdTasks}>
          Tarefas criadas
          <span>{totalTasks}</span>
        </strong>

        <strong className={styles.completedTasks}>
          Concluídas
          <span>{taskConcluid}</span>
        </strong>
      </div>

      <div className={styles.contentTaskList}>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            if (false) {
            }
            return (
              <TaskList
                key={task.id}
                id={task.id}
                title={task.title}
                isCompleted={task.isCompleted}
                onDeleteTask={onDeleteTask}
                onCheckedTask={onCheckedTask}
              />
            );
          })
        ) : (
          <div className={styles.noTask}>
            <img src={clipBoard} alt="prancheta" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>
    </div>
  );
}
