import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import AddForm from '../AddForm/AddForm';
import { setProduct } from '../../redux/products/products-operations';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose }) {
  const dispatch = useDispatch();

  const addProduct = data => {
    dispatch(setProduct(data));
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <AddForm onSubmit={addProduct} onClose={onClose} />
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  img: PropTypes.string,
};

export default Modal;
