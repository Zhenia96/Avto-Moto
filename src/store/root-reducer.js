import { combineReducers } from 'redux';
import { NameSpace } from '../constants';
import reviewsReducer from './reviews/reviews-reducer';

const rootReducer = combineReducers({
  [NameSpace.REVIEW]: reviewsReducer,
});

export default rootReducer;
