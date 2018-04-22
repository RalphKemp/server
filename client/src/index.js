import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import App from './components/App.js';

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
// Here we've created a redux store at the very top level of our application,
// and hooked it up to the react side of our application by placing
// the provider tag. Provider is a react component that knows how to read changes
// from our redux store any time it gets some new state produced inside of it,
// - the porvider will then inform of all of it's children components (everything in App.js)
// then will update them all with the new state.

);
