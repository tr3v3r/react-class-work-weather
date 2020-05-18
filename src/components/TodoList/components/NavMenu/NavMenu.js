import React from 'react';
import { Button } from '../Button';
import styles from './styles.module.css';
import { pageTypes } from '../../constants';

export function NavMenu({ type, onChangePage }) {
  const onClick = (pageType) => {
    onChangePage(pageType);
  };

  return (
    <div className={styles.container}>
      <Button onClick={() => onClick(pageTypes.all)} isActive={type === pageTypes.all} type="nav">All</Button>
      <Button onClick={() => onClick(pageTypes.active)} isActive={type === pageTypes.active} type="nav">Active</Button>
      <Button onClick={() => onClick(pageTypes.done)} isActive={type === pageTypes.done} type="nav">Done</Button>
    </div>
  );
}
