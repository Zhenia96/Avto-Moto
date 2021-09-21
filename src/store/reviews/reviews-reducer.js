import { createReducer } from '@reduxjs/toolkit';
import { addReview, initReviews } from '../action';

const initialState = {
  reviews: [],
};

const reviewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addReview, ((state, action) => {
      state.reviews = [...state.reviews, action.payload];
    }))
    .addCase(initReviews, ((state, action) => {
      state.reviews = [...action.payload];
    }));
});

export default reviewsReducer;
