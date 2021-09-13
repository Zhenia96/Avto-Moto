import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPictures } from '../../mocks/pictures';
import './slider.scss';

const DEFAULT_PICTURE_INDEX = 0;
const MINI_PICTURES_COUNT = 3;

const getSlicedPictures = (currentPictureIndex, pictures) => {
  const lastPicturesIndex = pictures.length - 1;

  if (MINI_PICTURES_COUNT > (currentPictureIndex + lastPicturesIndex)) {
    return pictures;
  }
  if ((currentPictureIndex + (MINI_PICTURES_COUNT - 1)) < lastPicturesIndex) {
    return pictures.slice(currentPictureIndex, (currentPictureIndex + (MINI_PICTURES_COUNT)));
  } else {
    return pictures.slice((lastPicturesIndex - (MINI_PICTURES_COUNT - 1)), lastPicturesIndex + 1);
  }
}

const isBackButtonDisabled = (currentPictureIndex) => currentPictureIndex === 0;

const isNextButtonDisabled = (currentPictureIndex, pictures) => {
  const lastPicturesIndex = pictures.length - 1;
  return currentPictureIndex >= lastPicturesIndex;
}

function Slider(props) {
  const [pictures, setPictures] = useState([])
  const [currentPictureIndex, setCurrentPictureIndex] = useState(DEFAULT_PICTURE_INDEX)

  const currentPicture = pictures[currentPictureIndex];

  useEffect(() => {
    setPictures(getPictures());
  }, [])

  const handleBackButtonClick = () => {
    setCurrentPictureIndex(currentPictureIndex - 1);
  }

  const handleNextButtonClick = () => {
    setCurrentPictureIndex(currentPictureIndex + 1);
  }

  if (!currentPicture) {
    return null;
  }

  return (
    <div className={`${props.className ?? ''} slider`}>
      <span className='slider__new-mark' lang='en'>New model</span>
      <img className='slider__main-picture' src={currentPicture.url.main}
        alt={currentPicture.description} width='600' height='375' />
      <button className='slider__button slider__button--back' disabled={isBackButtonDisabled(currentPictureIndex, pictures)} onClick={handleBackButtonClick}>
        <span className='visually-hidden'>Предыдущая фотография</span>
      </button>
      <button className='slider__button slider__button--next' disabled={isNextButtonDisabled(currentPictureIndex, pictures)} onClick={handleNextButtonClick}>
        <span className='visually-hidden'>Следующая фотография</span>
      </button>
      <ul className='silder__pictures'>
        {getSlicedPictures(currentPictureIndex, pictures).map((picture) => {
          return (
            <li key={picture.id} className='silder__pictures-item'><img className='slider__picture' src={picture.url.mini}
              alt={picture.description} width='128' height='80' /></li>
          );
        })}
      </ul>
    </div>
  );
}

Slider.propTypes = {
  className: PropTypes.string,
}

export default Slider;