import React from 'react'
import styles  from './styles.module.css'

export function Input({ value, onChange }) {    

    return <input className={styles.input} value={value} onChange={onChange} />
}


