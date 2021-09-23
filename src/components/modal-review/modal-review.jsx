import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Rating from '../rating/rating';
import { RatingLabels } from '../../constants';
import { addReview } from '../../store/action';
import useField from './use-field';
import './modal-review.scss';

const INVALID_CLASS_NAME = 'modal-review__field-container--invalid';

const FieldName = {
  NAME: 'name',
  DIGNITY: 'dignity',
  LIMITATION: 'limitation',
  COMMENT: 'comment',
  RATING: 'rating',
};

function ModalReview({ closeModal }) {
  const [rating, setRating] = useField(0, FieldName.RATING);
  const [name, setName] = useField('', FieldName.NAME);
  const [dignity, setDignity] = useField('', FieldName.DIGNITY);
  const [limitation, setLimitation] = useField('', FieldName.LIMITATION);
  const [comment, setComment] = useField('', FieldName.COMMENT);

  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscButtonKeydown = (evt) => {
      if (evt.key === 'Escape') {
        closeModal(false);
      }
    };

    window.addEventListener('keydown', handleEscButtonKeydown);

    return () => {
      window.removeEventListener('keydown', handleEscButtonKeydown);
    };
  }, [closeModal]);

  const createReviewForStore = () => ({
    id: nanoid(),
    userName: name,
    dignity,
    limitations: limitation,
    comment,
    ratingValue: Number(rating),
    reviewTimestamp: Date.now(),
  });

  const handleCloseButtonClick = () => {
    closeModal(false);
  };

  const handlePopupWrapperMouseDown = (evt) => {
    if (evt.target.classList.contains('modal-review')) {
      closeModal(false);
    }
  };

  const handleNameInput = (evt) => {
    setName(evt.target.value);
  };

  const handleDignityInput = (evt) => {
    setDignity(evt.target.value);
  };

  const handleLimitationsInput = (evt) => {
    setLimitation(evt.target.value);
  };

  const handleRatingChange = (evt) => {
    setRating(evt.target.value);
  };

  const handleCommentInput = (evt) => {
    setComment(evt.target.value);
  };

  const handleSubmitButtonClick = () => {
    setIsNameEmpty(Boolean(!name.trim()));
    setIsCommentEmpty(Boolean(!comment.trim()));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (name.trim() && comment.trim()) {
      dispatch(addReview(createReviewForStore()));
      localStorage.clear();
      closeModal(false);
    }
  };

  return (
    <div onMouseDown={handlePopupWrapperMouseDown} className='modal-review'>
      <section className='modal-review__container'>
        <h2 className='modal-review__title'>Оставить отзыв</h2>
        <form onSubmit={handleSubmit} className='modal-review__form' action='/' method='POST' noValidate>
          <div className={`modal-review__field-container modal-review__field-container--required modal-review__field-container--name ${isNameEmpty ? INVALID_CLASS_NAME : ''}`}>
            <label className='visually-hidden' htmlFor='name'>Введите ваше имя</label>
            <input autoFocus onInput={handleNameInput} className='modal-review__field' type='text' name='name' id='name' placeholder='Имя' value={name} required />
            <p className='modal-review__invalid-message'>Пожалуйста, заполните поле</p>
          </div>

          <div className='modal-review__field-container modal-review__field-container--dignity'>
            <label className='visually-hidden' htmlFor='dignity'>Введите достоинства</label>
            <input onInput={handleDignityInput} className='modal-review__field' type='text' name='dignity' id='dignity' placeholder='Достоинства' value={dignity} />
          </div>

          <div className='modal-review__field-container modal-review__field-container--limitations'>
            <label className='visually-hidden' htmlFor='limitations'>Введите недостатки</label>
            <input onInput={handleLimitationsInput} className='modal-review__field' type='text' name='limitations' id='limitations' placeholder='Недостатки' value={limitation} />
          </div>
          <Rating onRatingChange={handleRatingChange} className='modal-review__rating' labelTitls={RatingLabels} value={Number(rating)} />

          <div className={`modal-review__field-container modal-review__field-container--required modal-review__field-container--comment ${isCommentEmpty ? INVALID_CLASS_NAME : ''}`}>
            <label className='visually-hidden' htmlFor='comment'>Напишите комментарий</label>
            <textarea
              onInput={handleCommentInput}
              className='modal-review__field'
              name='comment'
              id='comment'
              placeholder='Комментарий'
              value={comment}
              required
            />
            <p className='modal-review__invalid-message'>Пожалуйста, заполните поле</p>
          </div>
          <button onClick={handleSubmitButtonClick} className='modal-review__submit' type='submit'>Оставить отзыв</button>
        </form>
        <button onClick={handleCloseButtonClick} className='modal-review__close' type='button'>
          <span className='visually-hidden'>
            Закрыть окно
            отзыва
          </span>

        </button>
      </section>
    </div>
  );
}

ModalReview.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ModalReview;
