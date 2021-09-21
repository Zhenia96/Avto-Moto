import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../constants';

const addReview = createAction(ActionType.ADD_REVIEW, (review) => ({
  payload: review,
}));

const initReviews = createAction(ActionType.INIT_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export {
  addReview,
  initReviews,
};
