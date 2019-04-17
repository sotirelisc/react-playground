import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import TextReducer from './TextReducer';

export default combineReducers({
  textData: undoable(TextReducer)
});