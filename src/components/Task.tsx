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
}

export function Task({ tasks }: TasksProps) {
  return (
    <div className={styles.containerTasks}>
      <div className={styles.progressTasks}>
        <strong className={styles.createdTasks}>
          Tarefas criadas
          <span>0</span>
        </strong>

        <strong className={styles.completedTasks}>
          Concluídas
          <span>0</span>
        </strong>
      </div>

      <div className={styles.contentTaskList}>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            if (false) {
            }
            return (
              <TaskList
                id={task.id}
                title={task.title}
                isCompleted={task.isCompleted}
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
