import React from 'react';
import { Button } from '../Button';
import styles from './styles.module.css';

export function Row({
  title, isDone, onDeleteClick, setTodoDone, id,
}) {
  return (
    <div className={`${styles.container} ${isDone ? styles.activeContainer : ''}`}>
      <h2>{title}</h2>
      <div className={styles.buttonContainer}>
        <Button onClick={() => setTodoDone(id)} backgroundColor={isDone ? 'black' : 'green'}>{isDone ? 'Undo' : 'Done'}</Button>
        <Button onClick={() => onDeleteClick(id)} backgroundColor="red">Delete</Button>
      </div>

    </div>
  );
}
