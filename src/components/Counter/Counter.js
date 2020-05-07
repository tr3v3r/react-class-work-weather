import React, { useState } from 'react'
import { Button } from './components'
import styles from './styles.module.css'

export const Counter = () => {
    const [value, setValue] = useState(0)


    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => {
        setValue(value - 1)
    }

    const reset = () => {
        setValue(0)
    }

   return <div className={styles.container}>
       <div className={styles.counterContainer}>
           <span className={styles.counterText}>{value}</span>
       </div>
       <div className={styles.buttonsPanel}>
           <Button onClick={increment} color="green">+</Button>
           <Button onClick={reset} color="deepskyblue">*</Button>
           <Button onClick={decrement} color="red">-</Button>
       </div>
   </div> 
}