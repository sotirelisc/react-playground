import {
  UPDATE_TEXT
} from './types';

export const updateText = text => {
  return {
    type: UPDATE_TEXT,
    payload: text
  }
};
