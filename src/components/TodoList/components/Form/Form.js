import React from 'react';
import { Button } from '../Button';
import styles from './styles.module.css';

export function Form({ onSubmit, onChange, inputValue }) {
  const onSumbitHander = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const onChangeHandler = (event) => {
    onChange(event.target.value);
  };
  return (
    <form onSubmit={onSumbitHander} className={styles.form}>
      <label htmlFor="input">Add todo item</label>
      <input value={inputValue} onChange={onChangeHandler} id="input" className={styles.input} />
      <Button>Add</Button>
    </form>
  );
}
