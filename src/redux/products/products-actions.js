import { createAction } from '@reduxjs/toolkit';

const addProduct = createAction('product/add', data => ({
  payload: {
    ...data,
  },
}));

const deleteProduct = createAction('product/delete');

const getProducts = createAction('product/get');
const getProductsById = createAction('product/getId');
const editProductsById = createAction('product/edit');

export default {
  addProduct,
  deleteProduct,
  getProducts,
  getProductsById,
  editProductsById,
};
