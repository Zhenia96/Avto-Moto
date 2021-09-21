import { NameSpace } from '../../constants';

const getReviews = (state) => state[NameSpace.REVIEW].reviews;

export default getReviews;
