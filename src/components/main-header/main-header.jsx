import React from 'react';
import Logo from '../logo/logo.jsx';
import SiteMenu from '../site-menu/site-menu.jsx';
import './main-header.scss';

function MainHeader() {
  return (
    <header className='main-header'>
      <nav className='main-header__navigation wrapper'>
        <Logo className='main-header__logo' />
        <SiteMenu className='main-header__site-menu' />
      </nav>
    </header>
  );
}

export default MainHeader;