import { NameSpace } from '../../constants.js';

const getReviews = (state) => state[NameSpace.REVIEW].reviews;

export {
  getReviews,
}