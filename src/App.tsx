import styles from './App.module.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { Task } from './components/Task';
import './global.css';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask />
        <Task />
      </div>
    </>
  );
}
