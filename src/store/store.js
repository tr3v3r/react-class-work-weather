import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import { weatherAppMiddleware } from '../components/WeatherApp';

export const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(
      weatherAppMiddleware,
    ),
  ));
