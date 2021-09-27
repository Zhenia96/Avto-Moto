import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { RatingLabels } from '../../constants';
import getPassedTime from './passed-time-calculator';
import './review.scss';

dayjs.extend(customParseFormat);

function getTimeForDateTime(reviewTimestamp) {
  return dayjs(reviewTimestamp).format('YYYY-MM-DD HH:mm:ss');
}

function getPercentageRating(ratingValue) {
  return `${20 * ratingValue}%`;
}

function getRatingLabel(ratingValue) {
  return ratingValue ? RatingLabels[ratingValue - 1] : '';
}

function Review({ className, userReview }) {
  const {
    reviewTimestamp, comment, userName, ratingValue, limitations, dignity,
  } = userReview;
  return (
    <article className={`${className ?? ''} review`}>
      <h3 className='visually-hidden'>Отзыв пользователя</h3>
      <blockquote className='review__wrapper'>
        <cite className='review__user-name'>{userName}</cite>
        {dignity
          ? (
            <p className='review__dignity'>
              <span className='review__big-text'>Достоинства</span>
              {dignity}
            </p>
          )
          : null}
        {limitations
          ? (
            <p className='review__limitations'>
              <span className='review__big-text'>Недостатки</span>
              {limitations}
            </p>
          )
          : null}
        <p className='review__comment'>
          <span className='review__big-text'>Комментарий</span>
          {comment}
        </p>
        <div className='review__rating'>
          <span className='visually-hidden'>Рейтинг</span>
          <div className='review__rating-container'>
            <div className='review__rating-value' style={{ width: getPercentageRating(ratingValue) }} />
          </div>
          <span className='review__rating-description'>{getRatingLabel(ratingValue)}</span>
        </div>
      </blockquote>
      <footer className='review__footer'>
        <time className='review__time' dateTime={getTimeForDateTime(reviewTimestamp)}>{getPassedTime(reviewTimestamp)}</time>
        <a className='review__answer-button' href='./#'>Ответить</a>
      </footer>
    </article>
  );
}

Review.propTypes = {
  className: PropTypes.string.isRequired,
  userReview: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    reviewTimestamp: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    dignity: PropTypes.string,
    limitations: PropTypes.string,
    ratingValue: PropTypes.number,
  }).isRequired,
};

export default Review;
