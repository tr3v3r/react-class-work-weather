import React from 'react'
import styles from './styles.module.css'

export const Button = ({ onClick, color, children }) => {

    return <div onClick={onClick} style={{ backgroundColor: color }} className={styles.container}>
                <span className={styles.text}>
                   {children}
                </span>        
           </div>
}

