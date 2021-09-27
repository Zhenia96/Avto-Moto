import { createReducer } from '@reduxjs/toolkit';
import { changeIsPageScrolled } from '../action';

const initialState = {
  isPageScrolled: true,
};

const pageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeIsPageScrolled, (state) => {
      state.isPageScrolled = !state.isPageScrolled;
    });
});

export default pageReducer;
