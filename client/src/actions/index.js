import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  alert('survey sent');
  dispatch({ type: FETCH_USER, payload: res.data});
}

// redux thunk breaks the rule that we have to return an action
// from every action creator. It basically gives us access to the dispatch function.
// allowing us to manually dispatch an action instead of just returning it.

// if redux thunk sees that we return a function instead of a normal action,
// it will automatically call the function and pass in the dispatch function into it.
// we can now say when we want to dispatch the action - so when we get a succsessul response from
// our api, then we can say 'ok i want to dispatch the action now'.
