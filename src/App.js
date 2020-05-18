import React, { useState } from 'react';
import './App.css';
import {
  TodoList,
} from './components';


export function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}
