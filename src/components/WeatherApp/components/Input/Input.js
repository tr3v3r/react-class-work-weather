import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export function Input({ value, onChange, autoFocus = false }) {
  const onChangeHandler = (event) => {
    onChange(event.target.value);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return <input ref={inputRef} className={styles.input} value={value} onChange={onChangeHandler} />;
}
