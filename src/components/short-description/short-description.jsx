import React from 'react';
import PropTypes from 'prop-types';
import './short-description.scss';

function ShortDescription(props) {
  return (
    <dl className={`${props.className} short-description`}>
      <div className='short-description__item'>
        <dt className='short-description__name'><img src='img/engines_type-icon.svg' alt='Тип двигателя'
          width='53' height='40' /></dt>
        <dd className='short-description__value'>бензин</dd>
      </div>
      <div className='short-description__item'>
        <dt className='short-description__name'><img src='img/transmission-icon.svg' alt='Коробка передач'
          width='40' height='40' /></dt>
        <dd className='short-description__value'>механика</dd>
      </div>
      <div className='short-description__item'>
        <dt className='short-description__name'><img src='img/power-icon.svg' alt='Мощность' width='40'
          height='40' /></dt>
        <dd className='short-description__value'>100 л.с.</dd>
      </div>
      <div className='short-description__item'>
        <dt className='short-description__name'><img src='img/capacity-icon.svg' alt='Объем двигателя'
          width='40' height='40' /></dt>
        <dd className='short-description__value'>1.4 л</dd>
      </div>
    </dl>
  );
}

ShortDescription.propTypes = {
  className: PropTypes.string,
}

export default ShortDescription;