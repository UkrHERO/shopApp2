import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from './components/Container/Container';
import AddForm from './components/AddForm/AddForm';
import ProductsList from './components/ProductsList/ProductsList';
import {
  getProducts,
  deleteProduct,
  setProduct,
} from './redux/products/products-operations';
import { getProduct } from './redux/products/products-selectors';
import Modal from './components/Modal/Modal';

function App() {
  const products = useSelector(getProduct);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => dispatch(getProducts()), [dispatch]);

  const onItmClick = () => {
    setShowModal(!showModal);
  };

  const deleteProd = id => {
    dispatch(deleteProduct(id)).then(() => {
      dispatch(getProducts());
    });
  };
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <h2>Products</h2>
      <button type="button" onClick={onItmClick}>
        Add
      </button>
      <ProductsList products={products} deleteProd={deleteProd} />
      {showModal && <Modal onClose={onClose} />}
    </Container>
  );
}

export default App;
