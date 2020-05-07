import React from 'react';
import './App.css';
import { Counter, Button, Input, Table, TableRow } from './components';


const data = [
  ['Minsk', "Belarus", 30, 50],
  ['Rome', "Italy", 40, 60]
]

function App() {
  return (
    <div className="App">
         <Counter />
         <div className="weaher-container">
          <Input />
          <Button>Find</Button>
          <Button>Clear</Button>
         </div>
      <Table>
          {
            data.map(([city, country, gradC, gradF]) => {
                return <TableRow city={city} country={country} gradC={gradC} gradF={gradF}/>
            })
          }
        
      </Table>
    </div>
  );
}

export default App;
