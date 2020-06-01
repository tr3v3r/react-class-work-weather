import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
  Counter,
  SuperBoxSearch,
  WeatherApp,
  TodoList,
  MainMenu,
} from './components';


export function App() {
  return (
    <div className="App">
      <MainMenu />
      <Switch>
        <Route exact path="/">
          <div>
            Hello! This is my cool website!
          </div>
        </Route>

        <Route path="/weather">
          <WeatherApp />
        </Route>

        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/boxsearch">
          <SuperBoxSearch />
        </Route>

        <Route path="/todolist">
          <TodoList />
        </Route>
      </Switch>
    </div>
  );
}
