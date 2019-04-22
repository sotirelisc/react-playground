import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case FETCH_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case FETCH_STREAMS:
      // Streams come from API as an array of objects
      // So convert them to an object with id as key
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case UPDATE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_STREAM:
      // Delete stream from state based on id
      return _.omit(state, action.payload);
    default:
      return state;
  }
};