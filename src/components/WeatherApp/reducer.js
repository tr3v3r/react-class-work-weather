import { GET_WEATHER_REQUEST, GET_WEATHER_FAILURE, GET_WEATHER_SUCCESS } from './actions';


const initialState = {
  data: [], // { city: Minsk , country: Belarus , gradF: 15, gradC: 15 }
  loading: false,
  error: null,
};

export function weatherAppReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case GET_WEATHER_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, action.data],
      };
    }

    case GET_WEATHER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.data,
      };
    }

    default: return state;
  }
}
