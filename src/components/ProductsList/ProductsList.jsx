import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './ProductsList.module.css';
import Modal from '../Modal/Modal';
import { getProduct } from '../../redux/products/products-selectors';
// import { getProductById } from '../../redux/products/products-operations';
import EditForm from '../EditForm/EditForm';
import { getProductById } from '../../api/api';
import ModalEdit from '../ModalEdit/ModalEdit';

const INITIAL_STATE = {
  name: '',
  count: '',
  imageUrl: '/',
  width: '',
  height: '',
  weight: '',
  comments: '',
};

const ProductsList = ({ products, deleteProd }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [product, setProduct] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();

  const onItmClick = () => {
    setShowModal(!showModal);
  };
  const onClose = () => {
    setShowModal(false);
  };
  const onCloseEdit = () => {
    setShowModalEdit(false);
    setProduct({ ...INITIAL_STATE });
  };
  const editProd = id => {
    getProductById(id)
      .then(data => setProduct({ ...data }))
      .then(setShowModalEdit(true));
  };
  return (
    <ul>
      {products &&
        products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Count: {product.count}</p>
            <p>width: {product.width}</p>
            <p>height: {product.height}</p>
            <p>weight: {product.weight}</p>
            <button type="button" onClick={() => deleteProd(product.id)}>
              Delete
            </button>
            <button type="button" onClick={() => editProd(product.id)}>
              Edit
            </button>
          </li>
        ))}
      {showModal && <Modal onClose={onClose} />}
      {showModalEdit && <ModalEdit onClose={onCloseEdit} product={product} />}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

export default ProductsList;
