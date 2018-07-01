import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});


// every reducer we have in the combinereducers call has to be assigned to a key,
// the key is what the reducers output will be stored on in our state object maintained by redux,
// like state.auth.....
