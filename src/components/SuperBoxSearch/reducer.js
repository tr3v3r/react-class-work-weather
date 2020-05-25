import { SET_INPUT_VALUE, ADD_BOX_ITEM } from './actions';

const initialState = {
  data: ['join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
    'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
    'forEach', 'map', 'reduce', 'reduceRight', 'filter',
    'some', 'every'],
  inputValue: '',
};


export function superBoxSearchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_INPUT_VALUE: {
      return {
        ...state,
        inputValue: action.data,
      };
    }


    case ADD_BOX_ITEM: {
      return {
        ...state,
        data: [...state.data, state.inputValue],
      };
    }


    default: return state;
  }
}
