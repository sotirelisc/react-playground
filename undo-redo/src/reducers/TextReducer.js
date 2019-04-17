import {
  UPDATE_TEXT
} from '../actions/types';

const initialState = {
  text: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};