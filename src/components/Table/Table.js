import React from 'react'
import styles  from './styles.module.css'

export function Table({ children }) {
    return <div className={styles.button}>
    <table>
        <thead className={styles.header}>           
            <td className={styles.cell}>City</td>
            <td className={styles.cell}>Country</td>
            <td className={styles.cell}>t, &deg;C</td>
            <td className={styles.cell}>t, &deg;F</td>           
        </thead>
            <tbody>
            {children}
            </tbody>
        </table>      
    </div>
}