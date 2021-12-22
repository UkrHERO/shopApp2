import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

import { setProduct } from '../../redux/products/products-operations';
import EditForm from '../EditForm/EditForm';

const modalRoot = document.querySelector('#modal-root2');

function ModalEdit({ onClose, product }) {
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
      <EditForm onSubmit={addProduct} onClose={onClose} product={product} />
    </div>,
    modalRoot,
  );
}

ModalEdit.propTypes = {
  onClose: PropTypes.func,
};

export default ModalEdit;
