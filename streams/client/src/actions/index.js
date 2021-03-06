import streams from '../apis/streams';
import history from '../history';

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  UPDATE_STREAM
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// Use redux-thunk's getState argument to get userId
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  
  // Create stream with form data & current userId
  const response = await streams.post('/streams', {
    ...formValues,
    userId
  });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });

  // Navigate user back to index
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  });
};

export const updateStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({
    type: UPDATE_STREAM,
    payload: response.data
  });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id
  });

  // Navigate user back to index
  history.push('/');
};