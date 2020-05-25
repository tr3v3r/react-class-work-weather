import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './components';
import styles from './styles.module.css';
import { INCREMENT, DECREMENT, RESET } from './actions';

export const Counter = () => {
  const dispatch = useDispatch();


  const value = useSelector((state) => {
    return state.counter.value;
  });


  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  return (
    <div className={styles.container}>
      <div className={styles.counterContainer}>
        <span className={styles.counterText}>{value}</span>
      </div>
      <div className={styles.buttonsPanel}>
        <Button onClick={increment} color="green">+</Button>
        <Button onClick={reset} color="deepskyblue">*</Button>
        <Button onClick={decrement} color="red">-</Button>
      </div>
    </div>
  );
};
