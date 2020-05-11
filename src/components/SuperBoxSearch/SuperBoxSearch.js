import React, { useState } from 'react'

import { Box } from '../Box'
import { BoxContainer } from '../BoxContainer'
import { Form } from '../Form'

export function SuperBoxSearch() {
    const [data, setData] = useState(['join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
    'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
    'forEach', 'map', 'reduce', 'reduceRight', 'filter',
    'some', 'every'])

    const [inputValue, setInputValue] = useState('')
    
    const filteredData = data.filter(el => {
        return el.includes(inputValue)
     })
 

    const onSubmit = (event) => {
        event.preventDefault()
        if(filteredData.length === 0) {
            setData([...data, inputValue])
        }

    
    }

    const onChange = (event) => {
        setInputValue(event.target.value)
    }

  

    return <div>
    <Form
         isDataEmpty={filteredData.length === 0}
         onSubmit={onSubmit}
         inputValue={inputValue}
         onChange={onChange} />
    <BoxContainer>
        {filteredData.map(el => <Box>{el}</Box>)}
    </BoxContainer>
    </div>
}