import { ActionType } from '../constants.js';
import { createAction } from '@reduxjs/toolkit';

const addReview = createAction(ActionType.ADD_REVIEW, (review) => ({
  payload: review,
}));

const initReviews = createAction(ActionType.INIT_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export {
  addReview,
  initReviews,
}
