import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // res.data from action.
    default:
    return state;
  }
}


// default is null.
// so our auth piece of state is always going to be either null, res.data(user model), or false.
