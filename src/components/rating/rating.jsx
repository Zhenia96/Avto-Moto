import React from 'react';
import PropTypes from 'prop-types';
import './rating.scss';

const STAR_POSITION = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FORTH: 4,
  FIFTH: 5,
};

function Rating({
  className, value, labelTitls, onRatingChange,
}) {
  const handleRatingChange = (evt) => {
    onRatingChange(evt);
  };

  return (
    <div className={`${className} rating`} role='group' aria-labelledby='rating-title'>
      <div className='rating__title' id='rating-title'>Оцените товар:</div>
      <div className='rating__stars'>
        <input onChange={handleRatingChange} className='rating__field visually-hidden' type='radio' id='star-1' value='1' name='rating' checked={value === STAR_POSITION.FIRST} />
        <label className='rating__star' htmlFor='star-1' title={labelTitls[0] ?? STAR_POSITION.FIRST} />

        <input onChange={handleRatingChange} className='rating__field visually-hidden' type='radio' id='star-2' value='2' name='rating' checked={value === STAR_POSITION.SECOND} />
        <label className='rating__star' htmlFor='star-2' title={labelTitls[1] ?? STAR_POSITION.SECOND} />

        <input onChange={handleRatingChange} className='rating__field visually-hidden' type='radio' id='star-3' value='3' name='rating' checked={value === STAR_POSITION.THIRD} />
        <label className='rating__star' htmlFor='star-3' title={labelTitls[2] ?? STAR_POSITION.THIRD} />

        <input onChange={handleRatingChange} className='rating__field visually-hidden' type='radio' id='star-4' value='4' name='rating' checked={value === STAR_POSITION.FORTH} />
        <label className='rating__star' htmlFor='star-4' title={labelTitls[3] ?? STAR_POSITION.FORTH} />

        <input onChange={handleRatingChange} className='rating__field visually-hidden' type='radio' id='star-5' value='5' name='rating' checked={value === STAR_POSITION.FIFTH} />
        <label className='rating__star' htmlFor='star-5' title={labelTitls[4] ?? STAR_POSITION.FIFTH} />
      </div>
    </div>
  );
}

Rating.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  labelTitls: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default Rating;
