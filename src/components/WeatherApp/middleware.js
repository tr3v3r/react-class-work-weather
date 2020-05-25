import { getWeather } from '../../api';
import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from './actions';

export const weatherAppMiddleware = (store) => (next) => (action) => {
  if (action.type === GET_WEATHER_REQUEST) {
    getWeather(action.data).then((data) => {
      const { location: { country, name }, current: { temperature } } = data;

      store.dispatch({
        type: GET_WEATHER_SUCCESS,
        data: {
          country,
          city: name,
          gradF: temperature,
          gradC: temperature,
        },
      });
    }).catch((error) => {
      store.dispatch({ type: GET_WEATHER_FAILURE, data: error.message });
    });
  }

  return next(action);
};
