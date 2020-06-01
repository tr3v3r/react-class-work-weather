import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export const MainMenu = () => {
  return (
    <div className={styles.container}>
      <NavLink exact activeClassName={styles.activeLink} className={styles.link} to="/">Home</NavLink>
      <NavLink activeClassName={styles.activeLink} className={styles.link} to="/counter">Counter</NavLink>
      <NavLink activeClassName={styles.activeLink} className={styles.link} to="/weather">Weather</NavLink>
      <NavLink activeClassName={styles.activeLink} className={styles.link} to="/boxsearch">Box Search</NavLink>
      <NavLink activeClassName={styles.activeLink} className={styles.link} to="/todolist">Todo List</NavLink>
    </div>
  );
};
