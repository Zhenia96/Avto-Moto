import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button({
  children, className, href, onClick,
}) {
  return (
    <a onClick={onClick} className={`${className} button`} href={href}>
      {children}
    </a>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default Button;
