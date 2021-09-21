import React from 'react';
import PropTypes from 'prop-types';
import './logo.scss';

function Logo({ className }) {
  return (
    <a className={`${className} logo`} href='./#'>
      <img className='logo__image' src='img/logo-icon.svg' alt='Логотип Авто-мото' width='55' height='55' />
      <p className='logo__name'>
        Avto
        <br />
        Мото
      </p>
    </a>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
