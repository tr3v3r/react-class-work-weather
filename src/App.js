import React, { useState } from 'react';
import './App.css';
import { Counter, Button, Input, Table, TableRow, SuperBoxSearch} from './components';
import { getWeather } from './api'
import { updateStorageData, getInitialDataFromStorage } from './storage'




function App() {
 const [data, setData] = useState(() => {
   return getInitialDataFromStorage()
 })

 const [inputValue, setInputValue] = useState('')
 const [loading, setLoading] = useState(false)


 const onFindClick = async () => {  
  setInputValue('')

  setLoading(true)
  const result = await getWeather(inputValue)

  const { location: { name, country }, current: { temperature } } = result
  const nextData = { ...data, [name]: [name, country, temperature, temperature]  } 

  setData(nextData)

  updateStorageData(nextData)
  setLoading(false)

 }

 const onClearClick = () => {
  setInputValue('')
 }

  return (
    <div className="App">
         <Counter />
         <div className="weaher-container">
          <Input autoFocus={true} value={inputValue}  onChange={setInputValue} />
         
          <Button onClick={onFindClick}>{loading ? "Loading..." : "Find"}</Button>
          <Button onClick={onClearClick}>Clear</Button>
         </div>
      <Table>
          {
            Object.values(data).map(([city, country, gradC, gradF]) => {
                return <TableRow key={city} city={city} country={country} gradC={gradC} gradF={gradF}/>
            })
          }
        
      </Table>
      <SuperBoxSearch />
    </div>
  );
}

export default App;
