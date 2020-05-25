import React from 'react';
import styles from './styles.module.css';

export function TableRow({
  city, country, gradC, gradF,
}) {
  return (
    <tr>
      <td className={styles.cell}>{city}</td>
      <td className={styles.cell}>{country}</td>
      <td className={styles.cell}>{gradC}</td>
      <td className={styles.cell}>{gradF}</td>
    </tr>
  );
}
