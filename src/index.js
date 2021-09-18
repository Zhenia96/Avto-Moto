import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import { Provider } from 'react-redux';
import { rootReducer } from './store/root-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { initReviews } from './store/action.js';
import { userReviews } from './mocks/reviews.js';
import 'normalize.css';
import './scss/index.scss';

const store = configureStore({
  reducer: rootReducer,
})

store.dispatch(initReviews(userReviews))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
