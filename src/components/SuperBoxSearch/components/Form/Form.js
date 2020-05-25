import React from 'react';
import styles from './styles.module.css';

export function Form({
  inputValue, onChange, onSubmit, isDataEmpty,
}) {
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <input value={inputValue} onChange={onChange} className={styles.input} />
      <button className={styles.button}>{isDataEmpty ? 'Add' : 'Search'}</button>
    </form>
  );
}
