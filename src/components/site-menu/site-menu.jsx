import React from 'react';
import PropTypes from 'prop-types';
import './site-menu.scss';

function SiteMenu({ className }) {
  return (
    <ul className={`${className ?? ''} site-menu`}>
      <li className='site-menu__item'><a className='site-menu__link' href='./#'>Автомобили</a></li>
      <li className='site-menu__item'><a className='site-menu__link' href='./#'>Контакты</a></li>
      <li className='site-menu__item'><a className='site-menu__link' href='./#'>Услуги</a></li>
      <li className='site-menu__item'><a className='site-menu__link' href='./#'>Вакансии</a></li>
    </ul>
  );
}

SiteMenu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SiteMenu;
