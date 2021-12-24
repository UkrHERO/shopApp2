import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import s from './ProductsList.module.css';
import Modal from '../Modal/Modal';
import { getProductById } from '../../api/api';
import ModalEdit from '../ModalEdit/ModalEdit';
import { getProducts } from '../../redux/products/products-operations';

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
  const [select, setSelect] = useState('name');
  const dispatch = useDispatch();

  const onClose = () => {
    setShowModal(false);
  };
  const onCloseEdit = () => {
    setShowModalEdit(false);
    setProduct({ ...INITIAL_STATE });
    dispatch(getProducts());
  };
  const editProd = id => {
    getProductById(id)
      .then(data => setProduct({ ...data }))
      .then(setShowModalEdit(true));
  };

  const sort = [...products];
  return (
    <>
      <label>
        <p>Sort</p>
        <select onChange={e => setSelect(e.target.value)}>
          <option value="name">by name</option>
          <option name="count" value="count">
            by count
          </option>
        </select>
      </label>
      <ul>
        {products &&
          sort
            .sort((a, b) => {
              if (select === 'name') {
                return a.name.localeCompare(b.name);
              } else {
                return a.count - b.count;
              }
            })
            .map(product => (
              <li key={product.id}>
                <img src="https://picsum.photos/400" alt="christmas" />
                <h3>{product.name}</h3>
                <div className={s.BoxInfo}>
                  <p>Count: {product.count}</p>
                  <p>Width: {product.width}</p>
                  <p>Height: {product.height}</p>
                  <p>Weight: {product.weight}</p>
                </div>
                <div className={s.BoxBtn}>
                  <Button
                    variant="contained"
                    type="button"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteProd(product.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    type="button"
                    startIcon={<EditIcon />}
                    onClick={() => editProd(product.id)}
                  >
                    Edit
                  </Button>
                </div>
              </li>
            ))}
        {showModal && <Modal onClose={onClose} />}
        {showModalEdit && <ModalEdit onClose={onCloseEdit} product={product} />}
      </ul>
    </>
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
