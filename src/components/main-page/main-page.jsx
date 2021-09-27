import React from 'react';
import { useSelector } from 'react-redux';
import getIsPageScrolled from '../../store/page/selectors';
import MainFooter from '../main-footer/main-footer';
import MainHeader from '../main-header/main-header';
import ShortDescription from '../short-description/short-description';
import Gallery from '../gallery/gallery';
import Tabs from '../tabs/tabs';
import './main-page.scss';

const PAGE_NO_SCROLL_CLASS_NAME = 'page--no-scroll';

function MainPage() {
  const isPageScrolled = useSelector(getIsPageScrolled);

  return (
    <div className={`page ${!isPageScrolled ? PAGE_NO_SCROLL_CLASS_NAME : ''}`}>
      <MainHeader />
      <main className='page__content wrapper'>
        <div className='page__column'>
          <h1 className='page__title'>Марпех 11</h1>
          <ShortDescription className='page__short-description' />
          <p className='page__price'>
            <span className='page__price-new'>2 300 000 ₽</span>
            <del className='page__price-old'>
              2 &nbsp;400 000
              ₽
            </del>
          </p>
          <a className='page__button page__button--request' href='./#'>оставить заявку</a>
          <a className='page__button page__button--credit' href='./#'>В кредит от 11 000 ₽</a>
        </div>
        <Gallery />
        <Tabs className='page__tabs' />
      </main>
      <MainFooter />
    </div>
  );
}

export default MainPage;
