import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button({ children, className, href }) {
  return (
    <a className={`${className} button`} href={href ?? '/'}>
      {children}
    </a>
  );
}

Button.propTypes = {
  className: PropTypes.string,
}

export default Button;