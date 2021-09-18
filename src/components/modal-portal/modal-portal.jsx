import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalElement = document.getElementById('modal');

function ModalPortal({ children }) {
  return createPortal(children, modalElement);
}

ModalPortal.propTypes = {
  children: PropTypes.element.isRequired,
}

export default ModalPortal;