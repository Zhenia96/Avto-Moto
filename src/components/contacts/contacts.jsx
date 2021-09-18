import React from 'react';
import PropTypes from 'prop-types';
import './contacts.scss';

function Contacts(props) {
  return (
    <section className={`${props.className ?? ''} contacts`}>
      <h2 className='visually-hidden'>Контакты</h2>
      <address className='contacts__info'>
        <p className='contacts__item'>
          <span className='contacts__name'>Адрес</span>
          Санкт-Петербург,<br />
          набережная реки Карповки, дом 5
        </p>
        <p className='contacts__item'>
          <span className='contacts__name'>Режим работы</span>
          Ежедневно, с 10:00 до 21:00
        </p>
        <p className='contacts__item'>
          <span className='contacts__name'>Телефон</span>
          <a href='tel:88003335599'>8 (800) 333-55-99</a>
        </p>
        <p className='contacts__item'>
          <span className='contacts__name'>E-mail</span>
          <a href='mailto:info@avto-moto.ru'>info@avto-moto.ru</a>
        </p>
      </address>
      <iframe className='contacts__map' title='Санкт-Петербург, набережная реки Карповки, дом 5'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3993.5813120336416!2d30.31000944941548!3d59.96879598707467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5NzAyMg!5e0!3m2!1sru!2sby!4v1631566494470!5m2!1sru!2sby'
        width='431' height='271' allowFullScreen='' loading='lazy'></iframe>
    </section>
  );
}

Contacts.propTypes = {
  className: PropTypes.string,
}

export default Contacts;