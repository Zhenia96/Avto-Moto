import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Review from '../review/review';
import Button from '../button/button';
import ModalReview from '../modal-review/modal-review';
import ModalPortal from '../modal-portal/modal-portal';
import getReviews from '../../store/reviews/selectors';
import './reviews.scss';

function Reviews({ className }) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const reviews = useSelector(getReviews);

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    setIsModalOpened(true);
  };

  return (
    <section className={`${className ?? ''} reviews`}>
      <h2 className='visually-hidden'>Отзывы</h2>
      {
        reviews.length
          ? (
            <ul className='reviews__list'>
              {reviews.map((review) => (
                <li key={review.id} className='reviews__item'>
                  <Review className='reviews__review' userReview={review} />
                </li>
              ))}
            </ul>
          )
          : null
      }
      <Button onClick={handleButtonClick} className='reviews__button' href='./#'>Оставить отзыв</Button>
      {isModalOpened
        ? (
          <ModalPortal>
            <ModalReview closeModal={setIsModalOpened} />
          </ModalPortal>
        )
        : null}
    </section>
  );
}

Reviews.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Reviews;
