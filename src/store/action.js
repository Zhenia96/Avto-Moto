import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../constants';

const addReview = createAction(ActionType.ADD_REVIEW, (review) => ({
  payload: review,
}));

const initReviews = createAction(ActionType.INIT_REVIEWS, (reviews) => ({
  payload: reviews,
}));

const changeIsPageScrolled = createAction(ActionType.CHANGE_IS_PAGE_SCROLLED);

export {
  addReview,
  initReviews,
  changeIsPageScrolled,
};
