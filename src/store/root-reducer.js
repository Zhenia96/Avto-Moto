import { combineReducers } from 'redux';
import { NameSpace } from '../constants';
import reviewsReducer from './reviews/reviews-reducer';
import pageReducer from './page/page-reducer';

const rootReducer = combineReducers({
  [NameSpace.REVIEW]: reviewsReducer,
  [NameSpace.PAGE]: pageReducer,
});

export default rootReducer;
