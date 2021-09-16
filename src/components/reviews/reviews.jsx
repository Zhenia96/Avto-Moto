import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import { userReviews } from '../../mocks/reviews';
import Button from '../button/button';
import './reviews.scss';

function Reviews(props) {
  return (
    <section className={`${props.className ?? ''} reviews`}>
      <h2 className='visually-hidden'>Отзывы</h2>
      {
        userReviews.length ?
          <ul className='reviews__list'>
            {userReviews.map((review) => (
              <li key={review.id} className='reviews__item'>
                <Review className='reviews__review' userReview={review} />
              </li>
            ))}
          </ul> :
          null
      }
      <Button className='reviews__button' href='/'>Оставить отзыв</Button>
    </section>
  );
}

Reviews.propTypes = {
  className: PropTypes.string,
}

export default Reviews;