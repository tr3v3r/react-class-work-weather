import React, { useState } from 'react';
import {
  Form, NavMenu, List, Row,
} from './components';
import { pageTypes } from './constants';

export function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(pageTypes.all);

  const onChangePage = (nextPage) => {
    setPage(nextPage);
  };

  const onSubmit = () => {
    setTodos([...todos, { text: inputValue, isDone: false, id: Math.random() }]);
    setInputValue('');
  };

  const setTodoDone = (id) => {
    setTodos(todos.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => {
      return id !== item.id;
    }));
  };


  const filteredTodos = todos.filter((item) => {
    if (page === pageTypes.active) {
      return item.isDone === false;
    }

    if (page === pageTypes.done) {
      return item.isDone === true;
    }

    return true;
  });


  return (
    <div>
      <NavMenu type={page} onChangePage={onChangePage} />
      <Form inputValue={inputValue} onChange={setInputValue} onSubmit={onSubmit} />
      <List>
        {filteredTodos.map((item) => {
          return <Row key={item.id} onDeleteClick={deleteTodo} setTodoDone={setTodoDone} id={item.id} title={item.text} isDone={item.isDone} />;
        })}
      </List>
    </div>
  );
}
