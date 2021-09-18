import { combineReducers } from 'redux';
import { NameSpace } from '../constants.js';
import { reviewsReducer } from './reviews/reviews-reducer.js';

const rootReducer = combineReducers({
  [NameSpace.REVIEW]: reviewsReducer,
});

export {
  rootReducer,
}
