import React from 'react';
import './App.css';
import {
  Counter,
  SuperBoxSearch,
  WeatherApp,
} from './components';


export function App() {
  return (
    <div className="App">
      <WeatherApp />
      <Counter />
      <SuperBoxSearch />
    </div>
  );
}
