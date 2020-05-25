import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  Input, Button, Table, TableRow,
} from './components';
import styles from './styles.module.css';
import { GET_WEATHER_REQUEST } from './actions';

export const WeatherApp = () => {
  const { data, loading, error } = useSelector((state) => state.weatherApp);
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();


  const onClick = () => {
    dispatch({ type: GET_WEATHER_REQUEST, data: inputValue });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Input onChange={setInputValue} value={inputValue} />
        <Button onClick={onClick}>{loading ? 'Loading...' : 'Find'}</Button>
      </div>
      {error ? <h1 style={{ color: 'red' }}>{error}</h1> : null}
      <Table>
        {data.map(({
          city,
          country,
          gradF,
          gradC,
        }) => {
          return <TableRow city={city} country={country} gradC={gradC} gradF={gradF} />;
        })}

      </Table>
    </div>
  );
};
