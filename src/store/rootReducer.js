import { combineReducers } from 'redux';
import { counterReducer } from '../components/Counter';
import { superBoxSearchReducer } from '../components/SuperBoxSearch';
import { weatherAppReducer } from '../components/WeatherApp';


export const rootReducer = combineReducers({
  counter: counterReducer,
  superBoxSearch: superBoxSearchReducer,
  weatherApp: weatherAppReducer,
});
