const RatingLabels = ['Не советует', 'Так себе', 'Советует', 'Хорошо', 'Отлично'];

const REVIEWS_LENGTH = 10;

const ActionType = {
  ADD_REVIEW: 'reviews/addReview',
  INIT_REVIEWS: 'reviews/initReviews',
  CHANGE_IS_PAGE_SCROLLED: 'page/changeIsPageScrolled',
};

const NameSpace = {
  REVIEW: 'review',
  PAGE: 'page',
};

export {
  RatingLabels,
  REVIEWS_LENGTH,
  ActionType,
  NameSpace,
};
