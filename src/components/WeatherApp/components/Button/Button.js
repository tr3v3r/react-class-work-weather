import React from 'react';
import styles from './styles.module.css';

export function Button({ children, onClick }) {
  return (
    <div onClick={onClick} className={styles.button}>
      {children}
    </div>
  );
}
