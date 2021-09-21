import React from 'react';
import Slider from '../slider/slider';
import './gallery.scss';

function Gallery() {
  return (
    <section className='gallery'>
      <h2 className='visually-hidden'>Фотографии</h2>
      <Slider className='gallery__slider' />
    </section>
  );
}

export default Gallery;
