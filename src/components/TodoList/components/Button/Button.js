import React from 'react';
import styles from './styles.module.css';

export function Button({
  children, onClick, isActive = false, backgroundColor, type,
}) {
  function getClassNames() {
    return `${type === 'nav' ? styles.navButtonContainer : styles.container} ${isActive ? styles.activeNavButton : ''}`;
  }

  return <button style={{ backgroundColor }} className={getClassNames()} onClick={onClick} type="submit">{children}</button>;
}
