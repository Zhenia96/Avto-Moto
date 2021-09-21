import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/app/app';
import rootReducer from './store/root-reducer';
import { initReviews } from './store/action';
import userReviews from './mocks/reviews';
import 'normalize.css';
import './scss/index.scss';

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(initReviews(userReviews));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
