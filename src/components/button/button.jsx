import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button({ children, className, href, onClick }) {
  return (
    <a onClick={onClick} className={`${className} button`} href={href ?? '/'}>
      {children}
    </a>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
}

export default Button;