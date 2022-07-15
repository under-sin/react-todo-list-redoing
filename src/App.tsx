import styles from './App.module.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Task } from './components/Task';
import './global.css';

const taskListContent: any[] = [];
function addTaskContent(content: string[]): void {
  taskListContent.push(content);

  console.log(taskListContent);
}

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask taskContent={addTaskContent} />
        <Task />
      </div>
    </>
  );
}
