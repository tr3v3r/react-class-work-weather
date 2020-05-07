import React from 'react'
import styles  from './styles.module.css'

export function Button({ children }) {
    return <div className={styles.button}>
        {children}
    </div>
}