import React from 'react';
import './main-footer.scss';

function MainFooter() {

  return (
    <footer className='main-footer'>
      <div className='wrapper'>
        <ul className='main-footer__menu'>
          <li className='main-footer__menu-item'>
            <a className='main-footer__menu-link' href='/'>Корпоративным клиентам</a>
          </li>
          <li className='main-footer__menu-item'>
            <a className='main-footer__menu-link' href='/'>Клиентам</a>
          </li>
          <li className='main-footer__menu-item'>
            <a className='main-footer__menu-link' href='/'>Аренда авто</a>
          </li>
          <li className='main-footer__menu-item'>
            <a className='main-footer__menu-link' href='/'>Каршеринг</a>
          </li>
          <li className='main-footer__menu-item'>
            <a className='main-footer__menu-link' href='/'>Как продать авто</a>
          </li>
          <li className='main-footer__menu-item'>
            <a className='main-footer__menu-link' href='/' lang='en'>Trade-in</a>
          </li>
          <li className='main-footer__menu-item'>
            <a className='main-footer__menu-link' href='/' lang='en'>Test drive</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default MainFooter;