import React from 'react';
import MainFooter from '../main-footer/main-footer.jsx';
import MainHeader from '../main-header/main-header.jsx';
import ShortDescription from '../short-description/short-description.jsx';
import './main-page.scss';

function MainPage() {
  return (
    <div className='page'>
      <MainHeader />
      <main className='page__content wrapper'>
        <div className='page__column'>
          <h1 className='page__title'>Марпех 11</h1>
          <ShortDescription className='page__short-description' />
          <p className='page__price'><span className='page__price-new'>2 300 000 ₽</span><del className='page__price-old'>2 &nbsp;400 000
            ₽</del></p>
          <a className='page__button page__button--request' href='/'>оставить заявку</a>
          <a className='page__button page__button--credit' href='/'>В кредит от 11 000 ₽</a>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}

export default MainPage;